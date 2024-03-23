import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutCoin from "./Pages/AboutCoin";
import Footer from "./Footer/Footer";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about-coin" element={<AboutCoin />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
