import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginFacebook.scss';
import Cookies from 'universal-cookie';
import { Redirect } from "react-router-dom";


class LoginFacebook extends React.Component {

	state = {
		redirect: false,
	}

	facebookLogin = () => {
		if (!window.FB) return;

		// Facciamo il login
		// vediamo se esiste uno status attivo
		window.FB.getLoginStatus(response => {
			if (response.status === 'connected') {
				// Logged into your webpage and Facebook.
				// leggiamo i dati
				this.facebookLoginHandler(response);
			} else { // la persona non e loggata nel sito
				// aviamo la finestra per accedere al facebook dell'utente
				// lo scope sono le autorizazioni che richiediamo all'utente nel momento del log in
				window.FB.login(this.facebookLoginHandler, { scope: 'public_profile, email' });
			}
		});
	}

	facebookLoginHandler = (response) => {
		console.log(response);
		if (response.status === 'connected') {
			// leggiamo i dati dell'utente rispettivo
			window.FB.api('/me?fields=name,email,picture', userData => {
				console.log(userData);
				// deposito la sessione dell' utente nella nostra applicazione
				const userName = JSON.stringify(userData.name).split(" ");
				// suddivido il nome intero che facebook mi da, in modo da poter avere separati il nome e cognome
				const name_user = userName[0].replace('"', '');
				const last_name = userName[1].replace('"', '');

				const userDataState = {
					name: name_user,
					lastName: last_name,
					email: userData.email,
					picture: userData.picture.data.url
				}
				console.log(userDataState);
				const cookies = new Cookies();
				// salviamo i dati nel cookie
				cookies.set("userData", userDataState, { path: '/' });
				this.setState({
					redirect: true // lo rendiamo a true in modo da cambiare rotta ed andare nel home component
				})
			});
		}
	}

	render() {
		if (this.state.redirect === true) {
			return <Redirect to='/home' />
		} else {
			return (
				<div className="login-section">
					<h2>Facebook Login</h2>
					<a onClick={this.facebookLogin} className="login">
						<span>Connect to facebook</span>
					</a>
				</div>);
		}
	}
};


export default LoginFacebook;
