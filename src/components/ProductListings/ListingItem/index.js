import React from "react";
import { Link } from "react-router-dom";

// Css
import "./ListingItem.css";

const ListingItem = () => (
    <Link to="/" className="listingitem">
        <div className="listingitem__img-wrapper">
            <img
                className="listingitem__img"
                src="https://assignment-appstreet.herokuapp.com/iphone_32gb_silver.jpg"
                alt=""
            />
        </div>
        <div className="listingitem__title">Product Name</div>
        <div className="listingitem__price">₹ 4324</div>
    </Link>
);

export default ListingItem;
