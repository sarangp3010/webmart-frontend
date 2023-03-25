import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Cart from "../components/cart/cart";
import data from "../data.json";
import { getCarts, getCartById, updateCart, deleteCart} from "../services/cart/cartService";

const Carts = () => {
  const [filteredData, setData] = useState(data);

    useEffect(() => {
        let tempData;
        const Temp = async () => {
            tempData = await getCarts();
            setData(tempData.data.carts);
            console.log(tempData.data.carts);
        };
        Temp();
    }, []);

    return (
        <div className="px-4 px-lg-0">
            <div className="pb-5">
                <div className="container d-inline">
                    <div className="row">
                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="border-0 bg-light" style={{minWidth: "800px"}}>
                                                <div className="p-2 px-3 text-uppercase">Product</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Price</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Quantity</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Remove</div>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                                {(filteredData || []).length ? (
                                    <>
                                        {(filteredData || []).map((product, i) => (
                                                <Cart data={product} />
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%,-50%)",
                                                textAlign: "center",
                                            }}
                                            className="fs-2">
                                            No Products Found with Filters
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="row py-5 p-4 bg-white rounded shadow-sm">
                        <div className="col-lg-6">
                            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                            <div className="p-4">
                                <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                <ul className="list-unstyled mb-4">
                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                        <h5 className="font-weight-bold">$400.00</h5>
                                    </li>
                                </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Carts;