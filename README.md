# Tumblr Welcome Page

This JS snippet should be installed in your Tumblr theme. Customize the
redirect URL (`URL_TO_REDIRECT_TO`) at the top. Every new browser session, this
will redirect users from your homepage to the URL you specify here.

## Setup Instructions

1. Edit your Tumblr theme and click **Edit HTML** in the left sidebar.

2. Immediately after the `<head>` tag, insert the following code:

	```javascript
    <script type="text/javascript">

    </script>
    ```

3. Within the `<script>` tags you just added, paste
	[the contents of `snippet.min.js`](https://raw.githubusercontent.com/jeffstephens/tumblr-welcome-page/master/snippet.min.js)
	from this repository.

4. Customize the `URL_TO_REDIRECT_TO` to point to your welcome page. This should
	be a fully qualified URL - `http://` and everything. Only edit what's in the
	"double quotes"!
