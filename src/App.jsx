import Header from "./Header/Header.jsx";
import CountDown from "./CountDown/CountDown.jsx";
import Table from "./Table/Table.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState, createContext } from "react";

export const DataFromChildContext = createContext();

function App() {
	const [dataFromChild, setDataFromChild] = useState("");

	const handleDataFromChild = (data) => {
		setDataFromChild(data);
	};
	return (
		<>
			<Header sendDataToParent={handleDataFromChild} />
			<CountDown />
			<DataFromChildContext.Provider value={dataFromChild}>
				<Table value={dataFromChild} />
			</DataFromChildContext.Provider>
			<Footer />
			{console.log(dataFromChild)}
		</>
	);
}

export default App;
