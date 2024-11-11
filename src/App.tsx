import { useState } from "react";
import BackgroundHeader from "./components/BackgroundHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";
import "./index.css";
import { ItemsType } from "./lib/types";

function App() {
	const [items, setItems] = useState(initialItems);
	const handleAddItem = (newItem: ItemsType): void => {
		const newItems = [...items, newItem];
		setItems(newItems);
	};
	return (
		<>
			<BackgroundHeader />
			<main>
				<Header />
				<ItemList items={items} />
				<Sidebar handleAddItem={handleAddItem} />
			</main>
			<Footer />
		</>
	);
}

export default App;
