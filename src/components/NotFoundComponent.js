import React, { Fragment } from 'react';

function NotFoundComponent ({ location }){

	return (
		<Fragment>
			<h1>404 - Sorry this page is not found</h1>
		 	No match for <code>{location.pathname}</code>
		</Fragment>
	)
}

export default NotFoundComponent;
