import React from "react";

export default function Checkout() {
    return (
        <>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0">
                            <a href="/">Home</a>
                            <span className="mx-2 mb-0">/</span>
                            <a href="/cart">Cart</a>
                            <span className="mx-2 mb-0">/</span>
                            <strong className="text-black">Checkout</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <div className="border p-4 rounded" role="alert">
                                Returning customer? <a href="#">Click here</a> to login
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <h2 className="h3 mb-3 text-black">Billing Details</h2>

                            <div className="p-3 p-lg-5 border">
                                <div className="form-group">
                                    <label htmlFor="c_country" className="text-black">
                                        Country <span className="text-danger">*</span>
                                    </label>

                                    <select id="c_country" className="form-control">
                                        <option value="1">Select a country</option>
                                        <option value="2">Bangladesh</option>
                                        <option value="3">Algeria</option>
                                        <option value="4">Afghanistan</option>
                                        <option value="5">Ghana</option>
                                        <option value="6">Albania</option>
                                        <option value="7">Bahrain</option>
                                        <option value="8">Colombia</option>
                                        <option value="9">Dominican Republic</option>
                                    </select>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <label htmlFor="c_fname" className="text-black">
                                            First Name <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" id="c_fname"/>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="c_lname" className="text-black">
                                            Last Name <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" id="c_lname"/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <label htmlFor="c_companyname" className="text-black">Company Name</label>
                                        <input type="text" className="form-control" id="c_companyname"/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <label htmlFor="c_address" className="text-black">
                                            Address <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" id="c_address"
                                               placeholder="Street address"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           placeholder="Apartment, suite, unit etc. (optional)"/>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <label htmlFor="c_state_country" className="text-black">
                                            State / Country <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" id="c_state_country"/>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="c_postal_zip" className="text-black">
                                            Postal / Zip <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" id="c_postal_zip"/>
                                    </div>
                                </div>

                                <div className="form-group row mb-5">
                                    <div className="col-md-6">
                                        <label htmlFor="c_email_address" className="text-black">
                                            Email Address <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" id="c_email_address"/>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="c_phone" className="text-black">
                                            Phone <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" id="c_phone"
                                               placeholder="Phone Number"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="c_order_notes" className="text-black"> Order Notes</label>

                                    <textarea id="c_order_notes" cols="30" rows="5" className="form-control"
                                              placeholder="Write your notes here..."/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <h2 className="h3 mb-3 text-black">Coupon Code</h2>

                                    <div className="p-3 p-lg-5 border">
                                        <label htmlFor="c_code" className="text-black mb-3">
                                            Enter your coupon code if you have one
                                        </label>

                                        <div className="input-group w-75">
                                            <input type="text" className="form-control" id="c_code"
                                                   placeholder="Coupon Code"/>

                                            <div className="input-group-append">
                                                <button className="btn btn-primary btn-sm px-4"> Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <h2 className="h3 mb-3 text-black">Your Order</h2>

                                    <div className="p-3 p-lg-5 border">
                                        <table className="table site-block-order-table mb-5">
                                            <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Total</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td> Top Up T-Shirt <strong className="mx-2">x</strong> 1</td>
                                                <td>$250.00</td>
                                            </tr>

                                            <tr>
                                                <td> Polo Shirt <strong className="mx-2">x</strong> 1</td>
                                                <td>$100.00</td>
                                            </tr>

                                            <tr>
                                                <td className="text-black font-weight-bold">
                                                    <strong>Cart Subtotal</strong>
                                                </td>
                                                <td className="text-black">$350.00</td>
                                            </tr>

                                            <tr>
                                                <td className="text-black font-weight-bold">
                                                    <strong>Order Total</strong>
                                                </td>
                                                <td className="text-black font-weight-bold">
                                                    <strong>$350.00</strong>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <div className="form-group">
                                            <button className="btn btn-primary btn-lg btn-block"
                                                    onClick={() => (window.location = "/thankyou")}>
                                                Place Order
                                            </button>
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
