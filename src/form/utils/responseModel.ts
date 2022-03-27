import { Schema, model } from 'mongoose';
import { ISchema } from '../../utils/cutomTypes';
import { userPopulate } from '../../utils/populate';

export interface IResponse extends ISchema {
  formId: any;
  parentId: string[];
  count: number;
  values: [IValue];
}

export interface IValue {
  _id: string;
  field: string;
  value: string;
  valueNumber: number;
  valueBoolean: boolean;
  valueDate: Date;
  values: [string];
  template: string;
  page: string;
  response: string;
  form: string;
  options: any;
}

export const valueSchema = new Schema({
  field: {
    type: String,
    required: true,
  },
  value: { type: String },
  valueDate: Date,
  valueNumber: Number,
  valueBoolean: Boolean,
  media: {
    type: [{ url: String, caption: String }],
    default: [],
  },
  values: {
    type: [String],
    default: [],
  },
  template: {
    type: Schema.Types.ObjectId,
    ref: 'Template',
  },
  page: {
    type: Schema.Types.ObjectId,
    ref: 'Page',
  },
  form: {
    type: Schema.Types.ObjectId,
    ref: 'Form',
  },
  response: {
    type: Schema.Types.ObjectId,
    ref: 'Response',
  },
  options: { type: Schema.Types.Mixed, default: { option: false } },
});

export const responseSchema = new Schema<IResponse>(
  {
    formId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Form',
    },
    count: {
      type: Number,
      required: true,
    },
    parentId: {
      // templatePageParentId
      type: Schema.Types.ObjectId,
      ref: 'Page',
    },
    workFlowFormReponseParentId: {
      type: Schema.Types.ObjectId,
      default: null,
    },
    values: [valueSchema],
    options: { type: Schema.Types.Mixed, default: { option: false } },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

responseSchema.index({ formId: 1, count: 1 }, { unique: true });

export const ResponseModel = model<IResponse>('Response', responseSchema);

export const valuesPopulate = [
  {
    path: 'values.page',
    select: 'types title media slug',
  },
  {
    path: 'values.response',
    select: 'values',
  },
];

export const responsePopulate = [
  userPopulate,
  {
    path: 'parentId',
    select: 'types title media slug',
  },
  ...valuesPopulate,
];

export const myResponsePopulate = [
  ...responsePopulate,
  {
    path: 'formId',
    select: 'name',
  },
];
