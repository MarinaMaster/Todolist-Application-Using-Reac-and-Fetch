import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { array } from "prop-types";

//create your first component

const Home = () => {
  async function getAllItems() {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/Marina1234"
      );
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      } else {
        console.log(resp.status);
      }
    } catch (error) {
      console.log(resp.text());
    }
  }

  useEffect(() => {
    getAllItems();
  }, []);

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  async function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      label: newItem,
    };
    const newList = [...items, item];

    const response = await fetch(
      "https://playground.4geeks.com/apis/fake/todos/user/Marina1234",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newList),
      }
    );
    if (response.ok) {
      getAllItems();
      setNewItem("");
    }
  }
  ///
  async function deleteItem(id) {
    const newArray = items.filter((item) => {
      if (item.id !== id) {
        return true;
      }
      return false;
    });

    const response = await fetch(
      "https://playground.4geeks.com/apis/fake/todos/user/Marina1234",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newArray),
      }
    );
    if (response.ok) {
      getAllItems();
    }
  }

  return (
    <div className="App">
      <h1>todos</h1>

      <input
        id="todoText"
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.label}{" "}
              <button className="two" onClick={() => deleteItem(item.id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>

      <div className="quantity">{items.length} item left</div>
      <button className="add-button" id="add-button" onClick={() => addItem()}>
        Add
      </button>
    </div>
  );
};

export default Home;
