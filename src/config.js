export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_Gs6uwBJYsJCTOnjShBITkiP200vMPNx6K0",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-myapp-uploads"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://sglgbyxca1.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_uN2zJsEwQ",
        APP_CLIENT_ID: "11haa2ajg4v0ajs3aph47qheds",
        IDENTITY_POOL_ID: "us-east-1:d7c57eaf-da60-4175-ad42-1d0e1aebd57c"
    }
};
