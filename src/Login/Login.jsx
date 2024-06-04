import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isAlright, setIsAlright] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		const formData = { email, password };

		fetch("http://localhost/project/index.php", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.log("Error:", error);
			});
		setIsAlright("/home");
	};

	const hadleLink = () => {
		if (email && password) {
			return "/home";
		}
	};

	console.log(hadleLink());

	return (
		<>
			<form className="loginForm" onSubmit={handleSubmit}>
				<div className="email">
					<label className="emailLable" htmlFor="email">
						Your email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="emailInput"
						placeholder="Email"
						autoComplete="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="password">
					<label className="passwordLable" htmlFor="password">
						Your password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						className="passwordInput"
						placeholder="Password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<Link className="submitLink" to={hadleLink()}>
					<button className="submitBtn" type="submit">
						Sign Up
					</button>
					<button className="submitBtn" type="submit">
						Login In
					</button>
				</Link>
			</form>
		</>
	);
}

export default Login;
