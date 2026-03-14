import React from "react";

export default function Shop() {
    return (
        <>
            <div className="site-blocks-cover inner-page" data-aos="fade">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ml-auto order-md-2 align-self-start">
                            <div className="site-block-cover-content">
                                <h2 className="sub-title">#New Summer Collection 2019</h2>
                                <h1>Arrivals Sales</h1>
                                <p><a href="#" className="btn btn-black rounded-0">Shop Now</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 align-self-end">
                            <img src="images/model_4.png" alt="Image" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-border-bottom py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0">
                            <a href="/">Home</a>
                            <span className="mx-2 mb-0">/</span>
                            <strong className="text-black">Shop</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-9 order-1">
                            <div className="row align">
                                <div className="col-md-12 mb-5">
                                    <div className="float-md-left"><h2 className="text-black h5">Shop All</h2></div>

                                    <div className="d-flex">
                                        <div className="dropdown mr-1 ml-md-auto">
                                            <button type="button" className="btn btn-white btn-sm dropdown-toggle px-4"
                                                    id="dropdownMenuOffset" data-toggle="dropdown">
                                                Latest
                                            </button>

                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Men</a>
                                                <a className="dropdown-item" href="#">Women</a>
                                                <a className="dropdown-item" href="#">Children</a>
                                            </div>
                                        </div>

                                        <div className="btn-group">
                                            <button type="button" className="btn btn-white btn-sm dropdown-toggle px-4"
                                                    id="dropdownMenuReference" data-toggle="dropdown">
                                                Reference
                                            </button>

                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Relevance</a>
                                                <a className="dropdown-item" href="#">Name, A to Z</a>
                                                <a className="dropdown-item" href="#">Name, Z to A</a>

                                                <div className="dropdown-divider"></div>

                                                <a className="dropdown-item" href="#">Price, low to high</a>
                                                <a className="dropdown-item" href="#">Price, high to low</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-5">
                                {[
                                    {img: "prod_2.png", name: "Gray Shoe", price: "$20.00"},
                                    {
                                        img: "prod_3.png",
                                        name: "Blue Shoe High Heels",
                                        price: (
                                            <>
                                                <del>$46.00</del>
                                                $28.00
                                            </>
                                        )
                                    },
                                    {
                                        img: "model_5.png",
                                        name: "Denim Jacket",
                                        price: (
                                            <>
                                                <del>$46.00</del>
                                                $28.00
                                            </>
                                        ),
                                        rating: true
                                    },
                                    {
                                        img: "prod_1.png",
                                        name: "Leather Green Bag",
                                        price: (
                                            <>
                                                <del>$46.00</del>
                                                $28.00
                                            </>
                                        ),
                                        rating: true
                                    },
                                    {
                                        img: "model_1.png",
                                        name: "Smooth Cloth",
                                        price: (
                                            <>
                                                <del>$46.00</del>
                                                $28.00
                                            </>
                                        )
                                    },
                                    {img: "model_7.png", name: "Yellow Jacket", price: "$58.00"}
                                ].map((p, i) => (
                                    <div className="col-lg-6 col-md-6 item-entry mb-4" key={i}>
                                        <a href="/shop-single" className="product-item md-height bg-gray d-block">
                                            <img src={`images/${p.img}`} alt="Image" className="img-fluid"/>
                                        </a>

                                        <h2 className="item-title"><a href="/shop-single">{p.name}</a></h2>

                                        <strong className="item-price">{p.price}</strong>

                                        {p.rating && (
                                            <div className="star-rating">
                                                <span className="icon-star2 text-warning"></span>
                                                <span className="icon-star2 text-warning"></span>
                                                <span className="icon-star2 text-warning"></span>
                                                <span className="icon-star2 text-warning"></span>
                                                <span className="icon-star2 text-warning"></span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="site-block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 order-2 mb-5 mb-md-0">
                            <div className="border p-4 rounded mb-4">
                                <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>

                                <ul className="list-unstyled mb-0">
                                    <li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Men</span>
                                            <span className="text-black ml-auto">(2,220)</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Women</span>
                                            <span className="text-black ml-auto">(2,550)</span>
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="d-flex">
                                            <span>Children</span>
                                            <span className="text-black ml-auto">(2,124)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="border p-4 rounded mb-4">
                                <div className="mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                                    <div id="slider-range" className="border-primary"></div>

                                    <input type="text" id="amount" className="form-control border-0 pl-0 bg-white"
                                           disabled/>
                                </div>

                                <div className="mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>

                                    <label htmlFor="s_sm" className="d-flex">
                                        <input type="checkbox" id="s_sm" className="mr-2 mt-1"/>
                                        <span className="text-black">Small (2,319)</span>
                                    </label>

                                    <label htmlFor="s_md" className="d-flex">
                                        <input type="checkbox" id="s_md" className="mr-2 mt-1"/>
                                        <span className="text-black">Medium (1,282)</span>
                                    </label>

                                    <label htmlFor="s_lg" className="d-flex">
                                        <input type="checkbox" id="s_lg" className="mr-2 mt-1"/>
                                        <span className="text-black">Large (1,392)</span>
                                    </label>
                                </div>

                                <div className="mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>

                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-danger color d-inline-block rounded-circle mr-2"></span>
                                        <span className="text-black">Red (2,429)</span>
                                    </a>

                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-success color d-inline-block rounded-circle mr-2"></span>
                                        <span className="text-black">Green (2,298)</span>
                                    </a>

                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-info color d-inline-block rounded-circle mr-2"></span>
                                        <span className="text-black">Blue (1,075)</span>
                                    </a>

                                    <a href="#" className="d-flex color-item align-items-center">
                                        <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>
                                        <span className="text-black">Purple (1,075)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="title-section mb-5">
                        <h2 className="text-uppercase"><span className="d-block">Discover</span> The Collections</h2>
                    </div>

                    <div className="row align-items-stretch">
                        <div className="col-lg-8">
                            <div className="product-item sm-height full-height bg-gray">
                                <a href="#" className="product-category">Women <span>25 items</span></a>
                                <img src="images/model_4.png" alt="Image" className="img-fluid"/>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="product-item sm-height bg-gray mb-4">
                                <a href="#" className="product-category">Men <span>25 items</span></a>
                                <img src="images/model_5.png" alt="Image" className="img-fluid"/>
                            </div>

                            <div className="product-item sm-height bg-gray">
                                <a href="#" className="product-category">Shoes <span>25 items</span></a>
                                <img src="images/model_6.png" alt="Image" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
