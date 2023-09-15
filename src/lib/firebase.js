import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { browserSessionPersistence, getAuth, setPersistence } from 'firebase/auth';

export const firebaseConfig = {
	apiKey: 'AIzaSyCciXNLhxf6hok6iOe4950iU53BQ9IBuGY',
	authDomain: 'cceasfm.firebaseapp.com',
	projectId: 'cceasfm',
	storageBucket: 'cceasfm.appspot.com',
	messagingSenderId: '965691338920',
	appId: '1:965691338920:web:c1b5092032b8b5769cd29d',
	measurementId: 'G-65HZ0NKYFX'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize authentication
const auth = getAuth();
setPersistence(auth, browserSessionPersistence);

export { app, db, auth };
