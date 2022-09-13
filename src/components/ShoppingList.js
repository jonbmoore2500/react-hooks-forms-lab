import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => selectedCategory === "All" || item.category === selectedCategory)   

  const itemsToDisplay2 = itemsToDisplay.filter((item) => {
    if (searchText === "") return true;
    let itemSlice = item.name.slice(0, searchText.length)
    return itemSlice.toLowerCase() === searchText.toLowerCase()
  })

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay2.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
