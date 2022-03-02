export const emailResolvers = {
  'Mutation createSendEmail': 'emailLambda',
  'Mutation createOneEmailCampaign': 'emailLambda',
  'Mutation updateOneEmailCampaign': 'emailLambda',
  'Mutation deleteOneEmailCampaign': 'emailLambda',
  'Mutation createOneEmailTemplate': 'emailLambda',
  'Mutation updateOneEmailTemplate': 'emailLambda',
  'Mutation deleteOneEmailTemplate': 'emailLambda',
  'Query  getAllEmails': 'emailLambda',
  'Query  getOneEmailTemplate': 'emailLambda',
  'Query  getAllEmailTemplatesByUserId': 'emailLambda',
  'Query  getAllEmailTemplates': 'emailLambda',
  'Query  getOneEmailCampaign': 'emailLambda',
  'Query  getAllEmailCampaignsByUserId': 'emailLambda',
  'Query  getAllEmailCampaigns': 'emailLambda',
};
