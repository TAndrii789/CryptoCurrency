import star from "/src/assets/star.png";
import "./Table.css";
import DataFetching from "/src/DataFetching/DataFetching.jsx";

function Table() {


	return (
		<div className="table-box">
			<div className="table">
				<header>
					<p>Name</p>
					<p>Price</p>
					<p>24H Chane</p>
					<p>Market Cap</p>
					<p>24H Volume</p>
				</header>
				<ul>
					<li>
						<img className="table-star" src={star} />
						<DataFetching />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Table;

// {
// 	"id": "bitcoin",
// 	"rank": "1",
// 	"symbol": "BTC",
// 	"name": "Bitcoin",
// 	"supply": "17193925.0000000000000000",
// 	"maxSupply": "21000000.0000000000000000",
// 	"marketCapUsd": "119150835874.4699281625807300",
// 	"volumeUsd24Hr": "2927959461.1750323310959460",
// 	"priceUsd": "6929.8217756835584756",
// 	"changePercent24Hr": "-0.8101417214350335",
// 	"vwap24Hr": "7175.0663247679233209"
// },
