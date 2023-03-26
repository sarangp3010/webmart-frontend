import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { getCarts, getCartById, updateCart, deleteCart} from "../../services/cart/cartService";

const Cart = (props: any) => {


    // const [quantity, setQuantity] = useState(props?.data?.quantity);
    // const [temp, setTemp] = useState(0);
    // console.log(quantity, "----", props?.data?.quantity, "----", temp);

    // console.log("----", props?.data);

    const [quantity, setQuantity] = useState(props?.data?.quantity);
    // let quantity = props?.data?.quantity;

    const removeCart = async (id : any) => {
        await deleteCart(id);
        const data = await getCarts();
        props?.setData(data.data.carts);
    }

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
                                <div className="" style={{ marginBottom: "50px" }}><input type='number' value={quantity} onChange={e => props?.quantityUpdate(Number(e.target.value), props.i)} style={{ maxWidth: "40px" }}></input></div>
                            </th>
                            <th scope="col" className="border-0">
                                <div className="" style={{ marginBottom: "50px" }}><button onClick={e => removeCart(props?.data?.id)} className="text-dark"><i className="fa fa-trash"></i></button></div>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default Cart;