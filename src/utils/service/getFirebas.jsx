import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAM6rssqRt6wb9YhSrW0YUaesCO-7rlteI",
    authDomain: "my-first-react-app-ee52f.firebaseapp.com",
    projectId: "my-first-react-app-ee52f",
    storageBucket: "my-first-react-app-ee52f.appspot.com",
    messagingSenderId: "655378967707",
    appId: "1:655378967707:web:31ac1816c0d064e4b6ea3e"
  };
  

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore() {
      return firebase.firestore(app);
      
  }