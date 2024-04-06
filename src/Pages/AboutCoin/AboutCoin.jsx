import { useLocation, useParams } from "react-router-dom";
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp  } from 'react-icons/fa';
import './AboutCoin.css'

const AboutCoin = () => {
	const { id } = useParams();

	let location = useLocation();
	let data = location.state;

	const filteredDataFunction = () => {
		return data.filter((item) => {
			if (item.name === id) return item;
		});
	};

	let filteredCoin = filteredDataFunction()[0];

	const date = new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"})
	const changeFirstChar = Array.from(`${filteredCoin.change}`)[0];

	const changeColor24 = () => {
		let color
		if (changeFirstChar === '-') {
			color = 'hsl(351.16deg 84.07% 44.31%)'
		} else {
			color = 'hsl(114.09deg 100% 54.74%)'
		}
		return color
	}
	console.log(changeColor24())

	const chang24Style = {
		color: `${changeColor24()}`,
	}

	const changeArrow = () => {
		let arrow
		if (changeFirstChar === '-'){
			arrow = <FaArrowDown />
		} else {
			arrow = <FaArrowUp />
		}
		return arrow
	}
	
	return (
		<>
			<div className="header-aboutCoin">
				<p className="coin-name">
					<span>{filteredCoin.name}</span> ( {filteredCoin.symbol})<br/>
					<span className="currentDate">{date}</span>
				</p>
				<p className="coin-description">Price<span>${filteredCoin.price}</span></p>
				<p className="coin-description">Change(24H)<span style={chang24Style}>{filteredCoin.change}{changeArrow()}</span></p>
				<p className="coin-description">Market Cap<span>${filteredCoin.marketCap}</span></p>
				<p className="coin-description">Volume<span>${filteredCoin.volume}</span></p>
			</div>
		</>
	);
};

export default AboutCoin;