import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const Cart = (props: any) => {


    const [quantity, setQuantity] = useState(props?.data?.quantity);
    const [temp, setTemp] = useState(0);
    console.log(quantity, "----", props?.data?.quantity, "----", temp);

    return (
        <div >
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="border-0" style={{ minWidth: "500px" }}>
                                <div className="text-uppercase"><img src={props?.data?.product?.thumbnailImage} alt="Not Present" width="100" className="rounded shadow-sm d-inline" />
                                    <h5 className="mb-0 ms-4 d-inline">{props?.data?.product?.name}</h5>
                                </div>
                            </th>
                            <th scope="col" className="border-0">
                                <div className="" style={{ marginBottom: "50px" }}>{props?.data?.product?.price}</div>
                            </th>
                            <th scope="col" className="border-0">
                                <div className="" style={{ marginBottom: "50px" }}><input type='number' value={props?.data?.quantity} onChange={e => setTemp(Number(e.target.value))} style={{ maxWidth: "40px" }}></input></div>
                            </th>
                            <th scope="col" className="border-0">
                                <div className="" style={{ marginBottom: "50px" }}><a href="#" className="text-dark"><i className="fa fa-trash"></i></a></div>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default Cart;