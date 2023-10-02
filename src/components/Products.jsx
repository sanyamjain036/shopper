import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/storeSlice";

function Product({ item }) {
  const dispatch = useDispatch();

  /**
   * 
   * @param {Product Item} item 
   * @returns void
   * @description function to handle "Add to cart" event
   */
  const addItemToCart = (item) => {
    if (item.quantity === 0) {
      alert("No Product left!");
      return;
    }
    dispatch(
      addItem({
        ...item,
        quantity: 1,
      })
    );
  };

  return (
    <div
      className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow ${
        item.quantity === 0 ? " opacity-30" : ""
      }`}
    >
      <img className="rounded-t-lg" src={item.imageURL} alt={item.name} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {item.name}
        </h5>
        <span className="text-gray-900 text-xs">{item.gender}</span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.currency + " " + item.price}
        </p>
        <button
          type="button"
          onClick={() => addItemToCart(item)}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 `}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const Products = ({ products }) => {
  return (
    <div className="grow grid grid-cols-1 gap-4 md:grid-cols-3">
      {products && products.length ? (
        <>
          {products.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </>
      ) : (
        <div>No Products found</div>
      )}
    </div>
  );
};

export default Products;
