const REGION = 'us-east-1';

export default {
    s3: {
        REGION,
        BUCKET: 'serverless-notes-app-uploads-files',
    },
    apiGateway: {
        REGION,
        URL: 'https://h0urqrv3yb.execute-api.us-east-1.amazonaws.com/prod',
    },
    cognito: {
        REGION,
        USER_POOL_ID: 'us-east-1_1ZPuKKzq6',
        APP_CLIENT_ID: '2l4uf7u949eakrbl66r672d9os',
        IDENTITY_POOL_ID: 'us-east-1:c6daaceb-c3ab-4972-ae87-1c07e852328d',
    },
    MAX_ATTACHMENT_SIZE: 5000000,
};
