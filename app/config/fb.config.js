require("firebase/auth");
const firebase = require("firebase");
const admin = require("firebase-admin");
const serviceAccount = require("../../coba-jwt-firebase-adminsdk-ppeaj-987f72a395.json");

const firebaseConfig = {
  apiKey: "AIzaSyCk911S_wt59FbNUmd4CBSAl7uzSx5AOsw",
  authDomain: "coba-jwt.firebaseapp.com",
  projectId: "coba-jwt",
  storageBucket: "coba-jwt.appspot.com",
  messagingSenderId: "824042357169",
  appId: "1:824042357169:web:8d34ebca7509717fa77d90",
  measurementId: "G-J4M848XSXX",
};

firebase.initializeApp(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://coba-jwt-default-rtdb.asia-southeast1.firebasedatabase.app/",
});
module.exports = { firebase, admin };
