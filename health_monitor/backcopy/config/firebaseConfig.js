const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'ADD YOUR FIREBASE DATABASE URL'
});

const db = admin.firestore();

module.exports ={admin,db};
