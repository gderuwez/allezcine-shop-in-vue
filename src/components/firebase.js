//firebaseConfigured.js
import * as firebase from 'firebase'
let config = {
  apiKey: "AIzaSyDaDe8YvfgrVTniCywhtN8nROWo-Hu4KOM",
  authDomain: "testing-vue-70460.firebaseapp.com",
  databaseURL: "https://testing-vue-70460.firebaseio.com",
  projectId: "testing-vue-70460",
  storageBucket: "testing-vue-70460.appspot.com",
  messagingSenderId: "693364308408"
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database()
export const testRef = db.ref('test');
