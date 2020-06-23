import * as firebase from 'firebase/app';
import 'firebase/auth';

//const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    /* Add FIREBASE config here */
};

firebase.initializeApp(firebaseConfig);


export default firebase;