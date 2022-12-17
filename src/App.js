import "./App.css";
import {PRODUCTS} from "./products.js";
import FilterableProductTable from "./components/FilterableProductTable.js"

function App() {
    return (
        <div className="App">
        <FilterableProductTable products={PRODUCTS}/>
        </div>
    );
}

export default App;
