import React from "react";

export default function Nav({ email, username, website }) {
	return (
		<div>
			<h1>{username}</h1>
			<h1>{email}</h1>
			<h1>{website}</h1>
		</div>
	);
}
