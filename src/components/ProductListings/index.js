import React, { Component } from "react";

// Components
import ListingItem from "./ListingItem";

// Css
import "./ProductListings.css";

class ProductListings extends Component {
    state = {
        products: [],
        nextPage: 1,
        isLoading: false,
    };

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll, false);

        this.fetchProductListings();
    }

    onScroll = () => {
        if (
            window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 500 &&
            !this.state.isLoading
        ) {
            console.log("da");
            this.fetchProductListings();
        }
    };

    fetchProductListings = () => {
        console.log(this.state.nextPage);
        this.setState({
            isLoading: true,
        });

        fetch(
            `${process.env.REACT_APP_API_URL}/products?page=${
                this.state.nextPage
            }`,
            {
                method: "GET",
            }
        )
            .then(response => {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem. Try Again!");
                    // toast.error("Looks like there was a problem. Try Again!");
                    this.setState({
                        isLoading: false,
                    });
                    return;
                }

                // Examine the text in the response
                response.json().then(data => {
                    if (data.success) {
                        this.setState(prevState => {
                            return {
                                products: [
                                    ...prevState.products,
                                    ...data.products,
                                    {
                                        _id: "5aec58985a39460004b3ds6f7",
                                        desc: null,
                                        images: [
                                            "https://assignment-appstreet.herokuapp.com/iphone_64gb_rose_gold.jpg",
                                        ],
                                        mark_price: 25599.0,
                                        name: this.state.nextPage,
                                        sale_msg: "10% Off",
                                        sale_price: 23039.1,
                                    },
                                ],
                                isLoading: false,
                                nextPage: prevState.nextPage + 1,
                            };
                        });
                    }
                    return;
                });
            })
            .catch(err => {
                console.log("Cannot retrieve Data:", err);
                // toast.error("Something Went Wrong. Try Again Later!");
                this.setState({
                    isLoading: false,
                });
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
