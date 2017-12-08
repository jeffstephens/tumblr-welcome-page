/**
 * Tumblr Welcome Page
 *
 * This JS snippet should be installed in your Tumblr theme. Customize the
 * redirect URL at the top. Every new browser session, this will redirect
 * users from your homepage to the URL you specify here.
 */

 $(document).ready( function() {
	function atBaseUrl() {
		return window.location.pathname == "/";
	}

	function hideSplash() {
		$('header.cover').hide();
		$('.holder').addClass('visible');
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
		if (atBaseUrl()) {

			// if we don't have the sessionStorage entry, create it
			if (sessionStorage.getItem('visited') === null) {
				sessionStorage.setItem('visited', 'true');
			} else {
				// otherwise, we've already been here - hide the interstitial immediately
				hideSplash();
			}
		} else {
			hideSplash();
		}
	} else {
		hideSplash();
	}
});
