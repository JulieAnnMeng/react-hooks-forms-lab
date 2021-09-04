import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [formData, setFormData ] = useState({name: "", category: "Produce"})



  function handleData(event){
    let name = event.target.name;
    let value = event.target.value

    setFormData({
      ...formData,
      [name]: value})
  }

  function handleSubmit (event) {
    event.preventDefault();
    
      const newItem = {
        id: formData.name,
        name: formData.name,
        category: formData.category
      };

      onItemFormSubmit(newItem)

    setFormData({name: "", category: ""})

  }

  return (
    <form 
    className="NewItem"
    onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        value={formData.name}
        onChange={handleData}
        />
      </label>

      <label>
        Category:
        <select 
        name="category"
        value={formData.category}
        onChange={handleData}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
