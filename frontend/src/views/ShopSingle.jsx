import {useState} from "react";
import {Link} from "react-router-dom";

export default function ShopSingle() {
    const [quantity, setQuantity] = useState(1);

    const increase = () => setQuantity(q => q + 1);
    const decrease = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    return (
        <>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0">
                            <Link to="/">Home</Link>{" "}
                            <span className="mx-2 mb-0">/</span>{" "}
                            <Link to="/shop">Shop</Link>{" "}
                            <span className="mx-2 mb-0">/</span>{" "}
                            <strong className="text-black">Gray Shoe</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="item-entry">
                                <div className="product-item md-height bg-gray d-block">
                                    <img src="/images/prod_2.png" alt="Gray Shoe" className="img-fluid"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h2 className="text-black">Gray Shoe</h2>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Pariatur, vitae, explicabo? Incidunt facere, natus soluta
                                dolores iusto! Molestiae expedita veritatis nesciunt doloremque
                                sint asperiores fuga voluptas, distinctio, aperiam, ratione
                                dolore.
                            </p>

                            <p className="mb-4">
                                Ex numquam veritatis debitis minima quo error quam eos dolorum
                                quidem perferendis. Quos repellat dignissimos minus, eveniet nam
                                voluptatibus molestias omnis reiciendis perspiciatis illum hic
                                magni iste, velit aperiam quis.
                            </p>

                            <p><strong className="text-primary h4">$50.00</strong></p>

                            <div className="mb-1 d-flex">
                                <label className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2" style={{top: "-2px", position: "relative"}}>
                                        <input type="radio" name="shop-sizes"/>
                                    </span>
                                    <span className="d-inline-block text-black">Small</span>
                                </label>

                                <label className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2" style={{top: "-2px", position: "relative"}}>
                                        <input type="radio" name="shop-sizes"/>
                                    </span>
                                    <span className="d-inline-block text-black">Medium</span>
                                </label>

                                <label className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2" style={{top: "-2px", position: "relative"}}>
                                        <input type="radio" name="shop-sizes"/>
                                    </span>
                                    <span className="d-inline-block text-black">Large</span>
                                </label>

                                <label className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2" style={{top: "-2px", position: "relative"}}>
                                        <input type="radio" name="shop-sizes"/>
                                    </span>
                                    <span className="d-inline-block text-black">Extra Large</span>
                                </label>
                            </div>

                            <div className="mb-5">
                                <div className="input-group mb-3" style={{maxWidth: "120px"}}>
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-primary" type="button" onClick={decrease}>
                                            -
                                        </button>
                                    </div>

                                    <input type="text" className="form-control text-center" value={quantity} readOnly/>

                                    <div className="input-group-append">
                                        <button className="btn btn-outline-primary" type="button" onClick={increase}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <p>
                                <Link to="/cart" className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary">
                                    Add To Cart
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section block-3 site-blocks-2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 site-section-heading text-center pt-4"><h2>Featured Products</h2></div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 block-3">
                            <div className="nonloop-block-3 owl-carousel">

                                <div className="item">
                                    <div className="item-entry">
                                        <div className="product-item md-height bg-gray d-block">
                                            <img src="/images/model_1.png" alt="" className="img-fluid"/>
                                        </div>
                                        <h2 className="item-title"><a href="#">Smooth Cloth</a></h2>
                                        <strong className="item-price">
                                            <del>$46.00</del>
                                            $28.00</strong>
                                        <div className="star-rating">
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="item-entry">
                                        <div className="product-item md-height bg-gray d-block">
                                            <img src="/images/prod_3.png" alt="" className="img-fluid"/>
                                        </div>
                                        <h2 className="item-title"><a href="#">Blue Shoe High Heels</a></h2>
                                        <strong className="item-price">
                                            <del>$46.00</del>
                                            $28.00</strong>
                                        <div className="star-rating">
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="item-entry">
                                        <div className="product-item md-height bg-gray d-block">
                                            <img src="/images/model_5.png" alt="" className="img-fluid"/>
                                        </div>
                                        <h2 className="item-title"><a href="#">Denim Jacket</a></h2>
                                        <strong className="item-price">
                                            <del>$46.00</del>
                                            $28.00</strong>
                                        <div className="star-rating">
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="item-entry">
                                        <div className="product-item md-height bg-gray d-block">
                                            <img src="/images/prod_1.png" alt="" className="img-fluid"/>
                                        </div>
                                        <h2 className="item-title"><a href="#">Leather Green Bag</a></h2>
                                        <strong className="item-price">
                                            <del>$46.00</del>
                                            $28.00</strong>
                                        <div className="star-rating">
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="item-entry">
                                        <div className="product-item md-height bg-gray d-block">
                                            <img src="/images/model_7.png" alt="" className="img-fluid"/>
                                        </div>
                                        <h2 className="item-title"><a href="#">Yellow Jacket</a></h2>
                                        <strong className="item-price">$58.00</strong>
                                        <div className="star-rating">
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                            <span className="icon-star2 text-warning"></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
