import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")
  const [itemsArr, setItemsArr] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function handleSearchChange(event) {
    setSearchText(event.target.value)
  }

  function formSubmit(itemObj) {
    setItemsArr([...itemsArr, itemObj])
  }


  const itemsToDisplay = itemsArr.filter((item) => selectedCategory === "All" || item.category === selectedCategory)   

  const itemsToDisplay2 = itemsToDisplay.filter((item) => searchText === "" || item.name.slice(0, searchText.length).toLowerCase() === searchText.toLowerCase())
 

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={formSubmit}/>
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
