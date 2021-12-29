import firebase from "firebase"

const firebaseConfig = {
 //place your firebase config here
 
  apiKey: "AIzaSyD0lmYf9m20uiOOdqCb43MTFwW6fdqEQTU",
  authDomain: "linkedin-clone-yt-bbc34.firebaseapp.com",
  projectId: "linkedin-clone-yt-bbc34",
  storageBucket: "linkedin-clone-yt-bbc34.appspot.com",
  messagingSenderId: "123210048617",
  appId: "1:123210048617:web:d8fccc5fa38d0bfbafaef8"
};


  //This special line of code here connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //gets the firestore database
  const db = firebaseApp.firestore();

  //we want to use firebase authentication
  const auth = firebase.auth();
  export { db, auth}