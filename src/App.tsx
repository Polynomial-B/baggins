import { useEffect, useState } from "react";
import BackgroundHeader from "./components/BackgroundHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";
import "./index.css";
import { ItemsType } from "./lib/types";
import { tryGetLocalStorageItems } from "./lib/helpers";

function App() {
	const [items, setItems] = useState(() =>
		tryGetLocalStorageItems("items", initialItems)
	);

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);

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
	const handleToggleItem = (id: number) => {
		const newItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, packed: !item.packed };
			}
			return item;
		});
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
	const counterTotal = () => {
		const amount = items.length;
		return amount;
	};
	const completed = () => {
		const amount = items.filter((item) => item.packed === true).length;
		return amount;
	};
	completed();
	return (
		<>
			<BackgroundHeader />
			<main>
				<Header counterTotal={counterTotal} completed={completed} />
				<ItemList
					items={items}
					handleDeleteItem={handleDeleteItem}
					handleToggleItem={handleToggleItem}
				/>
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
