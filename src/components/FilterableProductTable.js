import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";
import { useState } from "react";
function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}

export default FilterableProductTable;
