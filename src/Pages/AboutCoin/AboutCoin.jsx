import { useLocation, useParams } from "react-router-dom";
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

	const changeColor24 = function (){
		let color
		let changeFirstChar = Array.from(`${filteredCoin.change}`)[0];
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
	
	return (
		<>
			<div className="header-aboutCoin">
				<p className="coin-name">
					<span>{filteredCoin.name}</span> ( {filteredCoin.symbol})<br/>
					<span className="currentDate">{date}</span>
				</p>
				<p>Price<br/>{filteredCoin.price}</p>
				<p>Change(24H)<br/><span style={chang24Style}>{filteredCoin.change}</span></p>
				<p>Market Cap<br/>{filteredCoin.marketCap}</p>
				<p>Volume<br/>{filteredCoin.volume}</p>
			</div>
		</>
	);
};

export default AboutCoin;