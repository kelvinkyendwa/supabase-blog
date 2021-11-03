import React, { useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Posts() {
	const [data, setData] = React.useState([]);
	useEffect(() => {
		fetchPosts();
	}, []);
	const fetchPosts = async () => {
		let { data: posts, error } = await supabase
			.from("posts")
			.select("*")
			.order("id", true);
		if (error) console.log("error", error);
		else setData(posts);
	};
	return (
		<div>
			<h1>All Posts</h1>
			{data.map((post) => (
				<div key={post.id}>
					<div className="card">
						<h3 className="card-title">{post.title}</h3>
						<p className="card-text">{post.body}</p>
					</div>
				</div>
			))}
		</div>
	);
}
