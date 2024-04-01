// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSSxVpZZvEpxZ_3Xeqs_AQ4mHjSuYOqOs",
  authDomain: "fir-authentication-91b9e.firebaseapp.com",
  projectId: "fir-authentication-91b9e",
  storageBucket: "fir-authentication-91b9e.appspot.com",
  messagingSenderId: "844363541857",
  appId: "1:844363541857:web:aa9426353a3e48664d6920",
  databaseURL: "https://fir-authentication-91b9e-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialise Variables

const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
    event.preventDefault()

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Check if user already exists
fetchSignInMethodsForEmail(auth, email)
.then((signInMethods) => {
    // If user already exists, signInMethods array will contain at least one sign-in method
    if (signInMethods.length > 0) {
        alert("User with this email already exists");
    } else {
        // User does not exist, proceed with creating the account
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("User Created");

                // Write code for redirection to another webpage
                window.location.href = "dashboard.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        }
    })
    .catch((error) => {
        console.error("Error checking email:", error);
    });

});


document.addEventListener("DOMContentLoaded", function () {

    var loginLink = document.querySelector(".RegisterLink a");
    loginLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
    });

});

