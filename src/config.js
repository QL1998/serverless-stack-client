const dev = {
    STRIPE_KEY: "pk_test_Gs6uwBJYsJCTOnjShBITkiP200vMPNx6K0",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-1ugtyq3b4e2v"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://gsvh2ycpbk.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_pJZP0QvRN",
        APP_CLIENT_ID: "2l0uif559jngr5ocd6abqlj8mg",
        IDENTITY_POOL_ID: "us-east-1:c5cf559a-cb35-4833-b56b-003a50e79a21"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_Gs6uwBJYsJCTOnjShBITkiP200vMPNx6K0",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-16czt11dd7r58"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://dzes5euwu0.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_KiOfayJzX",
        APP_CLIENT_ID: "4uca4890ie5pfmvrdljlf552h6",
        IDENTITY_POOL_ID: "us-east-1:1cf9821f-b52e-4290-b8a9-42678ede00b8"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
