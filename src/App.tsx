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
	const handleAddItem = (newItemText: string): void => {
		const newItem: ItemsType = {
			id: Date.now(),
			item: newItemText,
			packed: false,
		};
		const newItems = [...items, newItem];
		setItems(newItems);
	};
	const handleDeleteItem = (id: number) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};
	const handleRemoveAllItems = () => {
		setItems([]);
	};
	const handleResetToInitial = () => {
		setItems(initialItems);
	};
	const handleMarkAllComplete = () => {
		const newItems: ItemsType[] = items.map((item) => {
			return { ...item, packed: true };
		});
		setItems(newItems);
	};
	const handleMarkAllIncomplete = () => {
		const newItems: ItemsType[] = items.map((item) => {
			return { ...item, packed: false };
		});
		setItems(newItems);
	};
	console.log(items);
	return (
		<>
			<BackgroundHeader />
			<main>
				<Header />
				<ItemList items={items} handleDeleteItem={handleDeleteItem} />
				<Sidebar
					handleAddItem={handleAddItem}
					handleRemoveAllItems={handleRemoveAllItems}
					handleResetToInitial={handleResetToInitial}
					handleMarkAllComplete={handleMarkAllComplete}
					handleMarkAllIncomplete={handleMarkAllIncomplete}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
