import React, { useState } from "react";
import { createContext } from "react";
import { ItemsData } from "./ItemsData";
export const Productdata = createContext();

export const DataProviderComponent = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [items, setItems] = useState(ItemsData);
  const [cart, setCart] = useState([]);
  const [itemquantity, setitemquantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const productsArray = items;

  // Searching logic!!
const SearchingByName = (searchValue) => {
  const trimmedValue = searchValue.trim().toLowerCase();

  if (trimmedValue === "") {
    setItems(ItemsData);
    return;
  }

  const filteredData = ItemsData.filter((data) => {
    return (
      data.generalCategery.trim().toLowerCase().includes(trimmedValue) ||
      data.name.trim().toLowerCase().includes(trimmedValue)
    );
  });

  setItems(filteredData);
};



  //Categeries Array Code!!!

  const allCategories = [
    ...new Set(
      ItemsData.map((item) => {
        return item.generalCategery;
      })
    ),
  ];

  // filter items logic

  const FilterProducts = (categ) => {
    const filteredData = ItemsData.filter(
      (data) => data.generalCategery === categ
    );
    console.log(`Filteredddddddddddddddd`);
    setItems(filteredData);
  };

  // AddToCart Functionality

  const AddtoCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.some((item) => item.id === product.id);

      if (!itemExists) {
        return [...prevCart, product];
      }

      return prevCart;
    });
  };

  // Toggle Cart Component Code!!!!!
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  //Delete items from Cart logic

  const removeCartItem = (ID) => {
    const filterCArt = cart.filter((cartItem) => cartItem.id !== ID);
    setCart(filterCArt);
  };

  //increment items quantity
  const incrementItemsQuantity = (operator, itemID) => {
    if (operator == "+") {
      setitemquantity((prevcuont) => {
        return prevcuont + 1;
      });
    } else if (operator == "-") {
      if (itemquantity > 1) {
        setitemquantity((prevcount) => {
          return prevcount - 1;
        });
      } else {
        removeCartItem(itemID);
      }
    }
  };

  // Toggle Sidebar Component Code!!
  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };
  return (
    <Productdata.Provider
      value={{
        ItemsData,
        productsArray,
        allCategories,
        cart,
        isCartOpen,
        isSidebarOpen,
        itemquantity,
        incrementItemsQuantity,
        setitemquantity,
        removeCartItem,
        toggleSidebar,
        toggleCart,
        setIsCartOpen,
        setItems,
        FilterProducts,
        AddtoCart,
        SearchingByName,
      }}
    >
      {children}
    </Productdata.Provider>
  );
};
