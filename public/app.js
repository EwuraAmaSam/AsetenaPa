import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;


    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('User created:', user);
    })
    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing up:', errorCode, errorMessage);
    }
    )





});




























// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
//     const user = userCredential.user;
// })
// .catch((error) =>{
//     const errorCode = error.code;
//     const errorMessage = error.message;
// }
// )