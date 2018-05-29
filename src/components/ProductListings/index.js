import React, { Component } from "react";

// Components
import ListingItem from "./ListingItem";

// Css
import "./ProductListings.css";

class ProductListings extends Component {
    state = {
        products: [],
        page: 1,
    };
    componentDidMount() {
        this.fetchProductListings();
    }

    fetchProductListings = () => {
        fetch(
            `${process.env.REACT_APP_API_URL}/products?page=${this.state.page}`,
            {
                method: "GET",
            }
        )
            .then(response => {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem. Try Again!");
                    // toast.error("Looks like there was a problem. Try Again!");
                    // this.setState({
                    //     loading: false,
                    // });
                    return;
                }

                // Examine the text in the response
                response.json().then(data => {
                    if (data.success) {
                        this.setState({
                            products: data.products,
                        });
                    }
                    // this.setState({
                    //     details: { ...data },
                    //     loading: false,
                    // });
                    return;
                });
            })
            .catch(err => {
                console.log("Cannot retrieve Data:", err);
                // toast.error("Something Went Wrong. Try Again Later!");
                // this.setState({
                //     loading: false,
                // });
            });
    };

    render() {
        return (
            <div className="productlisting flex-row">
                {this.state.products.map((product, index) => (
                    <ListingItem
                        key={index}
                        imgUrl={product.images[0]}
                        title={product.name}
                        price={product.sale_price}
                    />
                ))}
            </div>
        );
    }
}

export default ProductListings;
