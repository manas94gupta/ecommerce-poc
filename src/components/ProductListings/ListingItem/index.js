import React from "react";
import { Link } from "react-router-dom";

// Css
import "./ListingItem.css";

const ListingItem = ({ imgUrl, title, price }) => (
    <Link to="/" className="listingitem">
        <div className="listingitem__img-wrapper">
            <img className="listingitem__img" src={imgUrl} alt="" />
        </div>
        <div className="listingitem__title">{title}</div>
        <div className="listingitem__price">₹ {price.toFixed(2)}</div>
    </Link>
);

export default ListingItem;
