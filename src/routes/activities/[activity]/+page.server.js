import { error } from '@sveltejs/kit';
import { doc, getDoc } from "firebase/firestore";
import { app, db } from '$lib/firebase';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const docRef = doc(db, "activities", params.activity);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // docSnap.data() will be undefined in this case
        throw error(404, 'Not found');
    }
}