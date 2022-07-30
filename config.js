import "dotenv/config"

export const firebaseData =  {
    type: "service_account",
    project_id: "basefirebase-b567c",
    private_key_id: `${process.env.FB_PRIVATE_KEY_ID.replace(/\\n/g, '\n')}`,
    private_key: `${process.env.FB_PRIVATE_KEY.replace(/\\n/g, '\n')}`,
    client_email: "firebase-adminsdk-hnuqn@basefirebase-b567c.iam.gserviceaccount.com",
    
    client_id: "109997974390052379235",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://basefirebase-b567c-firebase-adminsdk-hnuqn-d153643a45.com"
}

export const variables = {
    TIPO_PERSISTENCIA: process.env.PERSISTENCIA || "mongo",
}