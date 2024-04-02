import { useLocation, useParams } from "react-router-dom";

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

	return (
		<>
			<div className="container">
				<p className="coin-symbol">
					<span>{filteredCoin.symbol}</span>
					{filteredCoin.name}
				</p>
				<p>{filteredCoin.price}</p>
				<p>{filteredCoin.change}</p>
				<p>{filteredCoin.marketCap}</p>
				<p>{filteredCoin.volume}</p>
			</div>
		</>
	);
};

export default AboutCoin;
