import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ setItems, items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search, setSearchedItem] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchedItem(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory !== "All" && selectedCategory !== item.category) {
      return false;
    } 
    if (search !== "" && !item.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    } 

    return true;
  });

  function onItemFormSubmit(newItem) {
    const newItems = [...items, newItem];
    setItems(newItems);
    
  }

  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
