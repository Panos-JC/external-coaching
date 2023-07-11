import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable ({ categories }) {

    const [checked, setChecked] = useState(false);
    const [search, setSearch] = useState("");
    
    const handleChange = (e) => {
        setChecked(e.target.checked);
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    return <>
        <div className="FilterableProductTable">
            <SearchBar handleChange={handleChange} handleSearchChange={handleSearchChange} checked={checked}/>
            <ProductTable categories={categories} search={search} checked={checked}/>
        </div>
    </>
}

export default FilterableProductTable;