import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<span className="copywright">
			<p>&copy; cryptoCurrency</p>
			<Link
				className="copywright-links"
				to="https://tandrii789.github.io/MyPortfolio/"
			>
				Portfolio
			</Link>
			<Link className="copywright-links" to="/">Contact</Link>
			<p>{year}</p>
		</span>
	);
}

export default Footer;
