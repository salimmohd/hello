import React, { useMemo, useState } from "react";

const SearchTask = () => {
  const [products, setProducts] = useState([
    { id: 1, brands: "Samusung", model: 2020 },
    { id: 2, brands: "Nokia", model: 2022 },
    { id: 3, brands: "Lava", model: 2023 },
    { id: 4, brands: "Oppo", model: 2024 },
    { id: 5, brands: "MI", model: 2025 },
    { id: 6, brands: "Redmi", model: 2021 },
  ]);

  const [searchPr, setSearchPr] = useState("");
  const filterprouduct = useMemo(() => {
    return products.filter((prd) => {
      return (
        prd.brands.toLowerCase().includes(searchPr.toLowerCase()) ||
        prd.model.toString().includes(searchPr.toString())
      );
    });
  }, [products, searchPr]);
  const submithandler = (e) => {
    e.preventDefault();
    setProducts((previesSate) => [...previesSate, { brands: searchPr }]);
  };
  return (
    <div>
      <h1>Search Task</h1>
      <h2>Count: {products.length}</h2>
      <form onSubmit={submithandler}>
        <input
          value={searchPr}
          type="text"
          placeholder="search products"
          onChange={(e) => setSearchPr(e.target.value)}
        />
        <input type="submit" />
      </form>

      {filterprouduct.map((item) => (
        <h3 key={item.id}>
          {item.brands} {item.model}
        </h3>
      ))}
    </div>
  );
};

export default SearchTask;
