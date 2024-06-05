import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		// event.preventDefault();

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
	};

	const hadleLink = () => {
		if (email && password) {
			return "/home";
		}
	};

	console.log(hadleLink());

	return (
		<div className="loginPage">
			<div className="form-container">
				<form className="loginForm" onSubmit={handleSubmit}>
					<h1>Hello there !</h1>
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

					<Link className="submitLink" to={hadleLink()} onClick={handleSubmit}>
						<button className="submitBtn" type="submit">
							&#8679; Sign Up &#8681;
						</button>
						<button className="submitBtn" type="submit">
							&#8679; Sign In &#8681;
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default Login;
