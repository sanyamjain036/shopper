import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import SearchBar from "../components/SearchBar";
import { INITIAL_STATE_FILTER } from "../Types/constants";
import { useSelector } from "react-redux";

const Index = () => {
  const [filter, setFilter] = useState(INITIAL_STATE_FILTER);
  const { data: allProducts } = useSelector((state) => state.store);

  const filteredCollected = () => {
    const collectedTrueKeys = {
      color: [],
      gender: [],
      price: [],
      type: [],
    };

    for (const property in filter) {
      if (property === "searchTerm") continue;
      Object.keys(filter[property]).forEach((item) => {
        if (filter[property][item]) collectedTrueKeys[property].push(item);
      });
    }

    return collectedTrueKeys;
  };

  const multiPropsFilter = (filters) => {
    const filterKeys = Object.keys(filters);
    return allProducts.filter((product) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        if (key === "price") {
          if (+product.price <= 250 && filters[key].includes("lessThan250"))
            return true;
          else if (
            +product.price >= 251 &&
            +product.price < 450 &&
            filters[key].includes("between251and450")
          )
            return true;
          else if (
            +product.price >= 450 &&
            filters[key].includes("moreThan450")
          )
            return true;
          else return false;
        }
        return filters[key].includes(product[key].toLowerCase());
      });
    });
  };

  const filteredProducts = () => {
    const subFilteredProducts = multiPropsFilter(filteredCollected());
    return subFilteredProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
        product.color.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
        product.type.toLowerCase().includes(filter.searchTerm.toLowerCase())
      );
    });
  };

  return (
    <div>
      <SearchBar setFilter={setFilter} />
      <div className="flex gap-3 justify-between">
        <Sidebar filter={filter} setFilter={setFilter} />
        <Products products={filteredProducts()} />
      </div>
    </div>
  );
};

export default Index;
