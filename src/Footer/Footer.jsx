import "./Footer.css";

function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<span className="copywright">
			<p>&copy; cryptoCurrency</p>
			<a
				className="copywright-links"
				href="https://tandrii789.github.io/MyPortfolio/"
			>
				Portfolio
			</a>
			<a className="copywright-links" href="#">Contact</a>
			<p>{year}</p>
		</span>
	);
}

export default Footer;
