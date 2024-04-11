//set up app configuration for openid connect
export default {
  oidc: {
    // public identifer
    clientId: '0oagdfbthezCbqZKz5d7',
    // issuer of tokens url when authorizing with OKTA Authorization Server
    issuer: 'https://dev-64022951.okta.com/oauth2/default',
    // user logs in send them here
    redirectUri: 'http://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email'],
  },
};
