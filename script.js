// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';


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

document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (email === "" || password === "") {
            if (email === "") {
                document.getElementById("email").style.border = "2px solid red";
            } else {
                document.getElementById("email").style.border = "1px solid #FF69B4";
            }

            if (password === "") {
                document.getElementById("password").style.border = "2px solid red";
            } else {
                document.getElementById("password").style.border = "1px solid #FF69B4";
            }

            alert("Please fill in all fields");
            return;
            
        }
        

        document.getElementById("email").style.border = "1px solid #FF69B4";
        document.getElementById("password").style.border = "1px solid #FF69B4";


        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
    
            //write code for redirection to another webpage
            window.location.href = "dashboard.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });


        alert("Login successful!");
    });

        var registerLink = document.querySelector(".RegisterLink a");
        registerLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "register.html";
        });
    });
    

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".EyeIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.style.backgroundImage = "url('eye-slash.svg')";
    } else {
        passwordInput.type = "password";
        eyeIcon.style.backgroundImage = "url('eye.svg')";
    }
}
