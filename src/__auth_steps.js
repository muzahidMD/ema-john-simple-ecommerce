/* 
    01. create a new firebase project in console.firebase.google.com 
    02. npm install firebase
    03. create firebase.init.js and import getAuth to export auth
    04. firebase settings > Authentication > enable email password authentication system
    05. create Login, SignUp component, setup route
    06. attach form field handler and form submit handler
    07. npm install --save react-firebase-hooks
    08. useCreateUserWithEmailAndPassword from react-firebase-hooks
    09. if user is created redirect to the expected page 
    10. userSignInWithEmailAndPassword for Login
    11. create RequireAuth component ==> check user exists also tract user location 
    12. in Route wrap protected component by using RequireAuth component 
*/

/**
 * Firebase hosting steps
 * 1. npm install -g firebase-tools (one time use the command for my computer)
 * 2. firebase login (one time for my computer)
 * 3. firebase init(one time for each project)
 * 4. npm run build (every time you went to deploy)
 * 5. firebase deploy (every time you went to deploy)
 **/