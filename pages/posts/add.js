import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function AddPost() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [alert, setAlert] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			supabase
				.from("posts")
				.insert({ title, body })
				.then((res) => {
					console.log(res);
					setAlert("Post added successfully", "success");
				});
		} catch (error) {
			console.log(error);
		} finally {
			setTitle("");
			setBody("");
		}
	};
	return (
		<div className="container">
			<h1>Add Post</h1>
			{alert && (
				<div className="alert alert-primary" role="alert">
					{alert}
				</div>
			)}
			<form>
				<div className="form-group mb-3 mt-3">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						className="form-control"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group mb-3 mt-3">
					<label htmlFor="body">Body</label>
					<textarea
						className="form-control"
						id="body"
						rows="3"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					></textarea>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
		</div>
	);
}
