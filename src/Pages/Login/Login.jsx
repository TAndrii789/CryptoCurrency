import "./Login.css";
import logoImg from "/src/assets/logo.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginFormComponent = ({
	email,
	setEmail,
	password,
	setPassword,
	confPassword,
	setConfPassword,
	signUp,
	handleSubmit,
	handleLink,
	handleAuth,
	info,
}) => (
	<div className="form-container">
		<form className="loginForm" onSubmit={handleSubmit}>
			<h1>Hello there!</h1>
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
			{signUp && (
				<input
					type="password"
					name="confPassword"
					id="confPassword"
					className="passwordInput"
					placeholder="Confirm Password"
					autoComplete="current-password"
					value={confPassword}
					onChange={(e) => setConfPassword(e.target.value)}
					required
				/>
			)}
			<p
				id="information"
				className="information"
				style={{ fontSize: "13px", color: "red" }}
			>
				{info}
			</p>
			<button
				className="submitBtn"
				id="signIN"
				type="button"
				onClick={handleLink}
			>
				&#8679; Sign Up &#8681;
			</button>
		</form>
		<span className="addition">
			<img className="logo" src={logoImg} alt="Logo" />
			<h1>Welcome to login</h1>
			<p>Want to Sign Up?</p>
			<button
				className="submitBtn"
				id="signUP"
				onClick={handleAuth}
				type="button"
			>
				&#8679; Sign In &#8681;
			</button>
		</span>
	</div>
);

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [signUp, setSignUp] = useState(false); // Use boolean instead of input element
	const [info, setInfo] = useState("");
	const [isValid, setIsValid] = useState(true);

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent default form submission
		const formData = { email, password };
		fetch("http://localhost/project/dehash.php", {
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

	useEffect(() => {
		const infoElement = document.getElementsByClassName("information")[0];
		if (infoElement) {
			console.log(infoElement.innerText);
		}
	}, [email, password]);

	const validateEmail = (email) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const handleLink = () => {
		if (!validateEmail(email)) {
			setInfo("Invalid email");
		} else if (password.length < 8) {
			setInfo("Password must have at least 8 characters");
		} else if (signUp && password !== confPassword) {
			setInfo("Passwords don't match");
		} else {
			setInfo("");
			navigate("/home");
		}
	};

	const handleAuth = () => {
		setSignUp(true); // Set signUp to true to render "Confirm Password" input
	};

	return (
		<div className="loginPage">
			<LoginFormComponent
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				confPassword={confPassword}
				setConfPassword={setConfPassword}
				handleSubmit={handleSubmit}
				handleLink={handleLink}
				handleAuth={handleAuth}
				signUp={signUp}
				info={info}
			/>
		</div>
	);
}

export default Login;
