import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Auth from "../components/Auth";
import Account from "../components/Account";
import Login from "../components/Login";

export default function Home() {
	const [session, setSession] = useState(null);

	useEffect(() => {
		setSession(supabase.auth.session());

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	return (
		<div className="container" style={{ padding: "50px 0 100px 0" }}>
			{!session ? (
				<>
					<Auth />
					<h5>Or login with your email and password</h5>
					<Login />
				</>
			) : (
				<Account key={session.user.id} session={session} />
			)}
		</div>
	);
}
