import React, { Component } from "react";

// Components
import ListingItem from "./ListingItem";

// Css
import "./ProductListings.css";

class ProductListings extends Component {
    render() {
        return (
            <div className="productlisting flex-row">
                <ListingItem />
            </div>
        );
    }
}

export default ProductListings;
