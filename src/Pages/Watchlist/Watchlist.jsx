import { useLocation } from "react-router-dom";

function Watchlist() {

	let location = useLocation();
	let data = location.state;

  console.log(data)
	return <div>data</div>;
}

export default Watchlist;