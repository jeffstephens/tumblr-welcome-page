/**
 * Tumblr Welcome Page
 *
 * This JS snippet should be installed in your Tumblr theme. Customize the
 * redirect URL at the top. Every new browser session, this will redirect
 * users from your homepage to the URL you specify here.
 */

URL_TO_REDIRECT_TO = 'http://example.com/welcome-page/';

window.atBaseUrl = function() {
	return window.location.pathname == "/";
}

// source: https://mathiasbynens.be/notes/localstorage-pattern
var hasStorage = (function() {
	try {
		sessionStorage.setItem('mod', 'mod');
		sessionStorage.removeItem('mod');
		return true;
	} catch (exception) {
		return false;
	}
}());

// make sure we support sessionStorage, otherwise do nothing
if (hasStorage) {

	// make sure we're at the root of the current page, otherwise do nothing
	if (window.atBaseUrl()) {

		// if we don't have the sessionStorage entry, create it and redirect
		if (sessionStorage.getItem('visited') === null) {
			sessionStorage.setItem('visited', 'true');
			window.location=URL_TO_REDIRECT_TO;
		}

	}

}
