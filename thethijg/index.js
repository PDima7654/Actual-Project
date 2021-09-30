// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTpHPEgQt04qWcekH2vpYfkdGFChCezPg",
  authDomain: "project-fr-d1263.firebaseapp.com",
  projectId: "project-fr-d1263",
  storageBucket: "project-fr-d1263.appspot.com",
  messagingSenderId: "375146527135",
  appId: "1:375146527135:web:66f6d88caf707d43b4a5aa",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

document.getElementById("signIn").addEventListener("click", function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    location.href = "information.html";
    alert("Signed in, " + email + ".");
    window.sessionStorage.setItem("email", email);
    })
    .catch((error) => {
      alert(error.message);

    });

});

document.getElementById("signUp").addEventListener("click", function () {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    alert("Account successfully created. Please sign in.");
  })
  .catch((error) => {
    alert(error.message);
  })

  set(ref(data, "account/" + email.replaceC(".", "")), {
    

  }

});