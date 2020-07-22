import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import Cookies from 'universal-cookie';


/*
 * Questa classe si occupa di mostrare i dati all'utente che si e loggato 
*/
const Home = () => {

	const cookies = new Cookies();
	const dataCookie = cookies.get('userData');

	let userData = {}; // dichiaro una variabile per mettere i nostri dati se ci sono

	// se i dati sono presenti nel cookie
	if (dataCookie !== undefined) {
		userData = {
			name: dataCookie.name,
			lastName: dataCookie.lastName,
			email: dataCookie.email,
			picture: dataCookie.picture,
		}
	}

	const facebookLogout = () => {
		// vedo lo status del login
		window.FB.getLoginStatus(response => {
			// se il profilo e connesso
			if (response && response.status === 'connected') {
				// esegui il logout dalla app
				window.FB.logout(function (response) {
					// remove cookie
					document.cookie = "userData= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
					document.location.reload();
				});
			}
		});
	}


	return (
		<div className="home-section">
			<div className="box">
				<img src={userData.picture} alt={userData.name} />
				<h2>Welcome {userData.name} {userData.lastName}</h2>
				<p>Email: {userData.email}</p>
				<a onClick={facebookLogout} className="logout">
					<span>Log Out</span>
				</a>
			</div>
		</div>
	);
}


export default Home;
