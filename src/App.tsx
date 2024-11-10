import { useState } from "react";
import BackgroundHeader from "./components/BackgroundHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";
import "./index.css";

function App() {
	const [items, setItems] = useState(initialItems);

	return (
		<>
			<BackgroundHeader />
			<main>
				<Header />
				<ItemList items={items} />
				<Sidebar items={items} setItems={setItems} />
			</main>
			<Footer />
		</>
	);
}

export default App;
