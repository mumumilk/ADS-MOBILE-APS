import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseProvider {

	constructor() {
		let config = {
			apiKey: "AIzaSyDHuMCU3gL1ydavWDzV5YUvH_lbGGA62_U",
	    authDomain: "projeto1-1d226.firebaseapp.com",
	    databaseURL: "https://projeto1-1d226.firebaseio.com",
	    projectId: "projeto1-1d226",
	    storageBucket: "projeto1-1d226.appspot.com",
	    messagingSenderId: "789029467931"
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
