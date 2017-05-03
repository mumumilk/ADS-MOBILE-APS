import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseProvider {

	constructor() {
		let config = {
            apiKey: "AIzaSyBNS6tzYKUMF-8MCrE8v9e0W7USgqKdS2E",
            authDomain: "aps01-cb66a.firebaseapp.com",
            databaseURL: "https://aps01-cb66a.firebaseio.com",
            projectId: "aps01-cb66a",
            storageBucket: "aps01-cb66a.appspot.com",
            messagingSenderId: "495910324562"
		};
		firebase.initializeApp(config);
	}

    database() {
        return firebase.database();
    }

    auth() {
        return firebase.auth();
    }

}