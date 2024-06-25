let firebaseConfig = {
    // Enter your firebase credentials
   
        apiKey: "AIzaSyDgML-n9exO0r332jAjBVolMoCmoMktxRE",
        authDomain: "blogging-website-a10f0.firebaseapp.com",
        projectId: "blogging-website-a10f0",
        storageBucket: "blogging-website-a10f0.appspot.com",
        messagingSenderId: "1082174481379",
        appId: "1:1082174481379:web:cf7da976ebdb3c2a0436d6"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();