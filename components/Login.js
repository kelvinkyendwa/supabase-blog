import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState("");
	const loginSupabase = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const { user, session, error } = await supabase.auth.signIn({
				email,
				password,
			});
			console.log(user, session);
			if (error) {
				console.log(error);
				alert(error.message);
			}
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div>
			<hr />
			<h1>Login</h1>
			<form>
				<label>
					Email:
					<input value={email} onChange={(e) => setEmail(e.target.value)} />
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<br />
				<button type="submit" onClick={loginSupabase} disabled={loading}>
					Login
				</button>
			</form>
		</div>
	);
}
