import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Cart = (props: any) => {

    const [quantity, setQuantity] = useState(props.data.quality);

    return (
        <div >
            {/* // <Row>
            //     <Col className="d-inline">
            //         <div className="d-inline" style={{}}>
            //             <img src="https://images.pexels.com/photos/8473458/pexels-photo-8473458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Not Present" width="70" className="rounded shadow-sm d-inline" />
            //         </div>
            //     </Col>
            //     <Col style={{minWidth: "800px"}}>
            //         <div className="d-inline" >
            //             <h5 className="mb-0 d-inline"> <a href="#">Timex Unisex Originals</a></h5>
            //         </div>
            //     </Col>
            //     <Col style={{marginLeft: "80px"}} className="p-2 px-3">
            //         <div className="border-0 align-middle"><strong>100</strong></div>
            //     </Col>
            //     <Col className="p-2 px-3">
            //         <div className="border-0 align-middle"><strong><input type='number' value={quantity} onChange={e => setQuantity(Number(e.target.value))} style={{maxWidth:"40px"}}></input></strong></div>
            //     </Col>
            //     <Col className="p-2 px-3">
            //         <div className="border-0 align-middle"><strong><a href="#" className="text-dark"><i className="fa fa-trash"></i></a></strong></div>
            //     </Col>
            // </Row> */}

            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="border-0" style={{minWidth: "500px"}}>
                                                <div className="text-uppercase"><img src={props.data.img} alt="Not Present" width="100" className="rounded shadow-sm d-inline" />
                                                <h5 className="mb-0 ms-4 d-inline">{props.data.name}</h5>
                                                </div>
                                            </th>
                                            <th scope="col" className="border-0">
                                                <div className="" style={{marginBottom: "50px"}}>{props.data.price}</div>
                                            </th>
                                            <th scope="col" className="border-0">
                                                <div className="" style={{marginBottom: "50px"}}><input type='number' value={quantity} onChange={e => setQuantity(Number(e.target.value))} style={{maxWidth:"40px"}}></input></div>
                                            </th>
                                            <th scope="col" className="border-0">
                                                <div className="" style={{marginBottom: "50px"}}><a href="#" className="text-dark"><i className="fa fa-trash"></i></a></div>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                                </div>
        </div>
    );
};

export default Cart;