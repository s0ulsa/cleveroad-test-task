import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAK4itEuzsROyinXvQnf5Ls1E2BGOTAw-U",
    authDomain: "cleveroad-test-task.firebaseapp.com",
    databaseURL: "https://cleveroad-test-task.firebaseio.com",
    projectId: "cleveroad-test-task",
    storageBucket: "cleveroad-test-task.appspot.com",
    messagingSenderId: "882710110659",
    appId: "1:882710110659:web:0c81f87176a6b73bccdd76",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
