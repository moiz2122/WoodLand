import React from "react";
import { useContext } from "react";
import { Productdata } from "../Context";
function Shop() {
  const { productsArray, setItems, cart } = useContext(Productdata);
  console.log(`Shoppppppppppp`, cart);
  return (
    <section className="">
      {cart.map((cartitems) => {
        const { id, name, categery, url, price } = cartitems;
        return (
          <article>
            <div>
              <img src={url} alt="image" />
            </div>
            <div className="descr-container">
              <h1>{name}</h1>
              <p>{price}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Shop;
