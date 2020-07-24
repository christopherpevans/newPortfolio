import { config } from '../config';

export const environment = {
  production: true,
  firebase: {
    apiKey: config.fbApi,
    authDomain: 'new-portfolio-77ee0.firebaseapp.com',
    databaseURL: 'https://new-portfolio-77ee0.firebaseio.com',
    projectId: 'new-portfolio-77ee0',
    storageBucket: 'new-portfolio-77ee0.appspot.com',
    messagingSenderId: config.messageId,
  },
};
