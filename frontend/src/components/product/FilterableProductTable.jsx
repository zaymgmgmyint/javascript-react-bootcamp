'use client'
import {useState} from "react";
import {data} from "@/components/product/data";
import classNames from "classnames";
import styles from './product.module.css'


function SearchBar({onFilterChange}) {

    let [filter, setFilter] = useState('');
    let [inStock, setInStock] = useState(false);

    const filterChange = (e) => {
        onFilterChange({
            filter: e.target.value,
            inStock: inStock,
        });
        setFilter(e.target.value);
    }

    const inStockChange = (e) => {
        onFilterChange({
            filter: filter,
            inStock: e.target.checked,
        });
        setInStock(e.target.checked);
    }

    return (
        <form>
            <input type={"text"} value={filter} onChange={filterChange} /><br/>
            <input type={"checkbox"} checked={inStock} onChange={inStockChange}/>
            Only show product in stock
        </form>
    )
}

//Presentational
function ProductTable({group}) {
    let categories = Object.keys(group);
    return (<div>
        <h3>Name Price </h3>
        {
            categories.map(category =>
                <ProductCategoryRow key={category}
                                    title={category}
                                    products={group[category]}>

                </ProductCategoryRow>)
        }

    </div>)
}

//Pure component
function ProductCategoryRow({title, products}) {
    return (<div>
        <h4>{title}</h4>
        {
            products.map(product => <ProductRow product={product}/>)
        }
    </div>);
}

function ProductRow({product}) {
    const productClass = classNames(styles.product_name, {
        [styles.product_not_in_stock]: !product.stocked
    });
    return (<div>
        <span className={productClass}>{product.name}  </span>
        <span className={styles.product_price}>{product.price}</span>
    </div>);
}

function applyFilter(data, filterParams) {
    let newData = [...data];

    if (filterParams.filter) {
        newData = newData.filter(product => product.name.includes(filterParams.filter));
    }

    if (filterParams.inStock) {
        newData = newData.filter(product => product.stocked === filterParams.inStock);
    }

    return newData;
}

function groupByCategory(products) {
    const group = {};
    for (const product of products) {
        if (group[product.category]) {
            group[product.category].push(product);
        } else {
            group[product.category] = [product];
        }
    }
    return group;
}

export default function FilterableProductTable() {

    const [products, setProducts] = useState(data);


    const onFilterChange = (filterParams) => {
        console.log(filterParams);
        const newData = [...applyFilter(data, filterParams)];
        setProducts(newData);
    }

    const group = groupByCategory(products);
    console.log('Group ', group);

    return (
        <div>
            <SearchBar onFilterChange={onFilterChange}/>
            <ProductTable group={group}/>
        </div>
    )
}