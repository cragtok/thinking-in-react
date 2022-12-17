import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

function FilterableProductTable({ products }) {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
}

export default FilterableProductTable;
