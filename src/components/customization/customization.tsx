import { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllModifyRequests, addModificationRequests } from "../../services/modificationRequests/modificationRequestsService";

const Customization = (props: any) => {
  const [prevRequests, setPrevRequests] = useState([]);

    const fetchData = async () => {
        const rawData = await getAllModifyRequests(false);
        const data = rawData?.data?.notifications.filter((data: any, i:number) => 
            data.product.id === props.data.productId);
        setPrevRequests(data);
    };
  const [comments, setComments] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

  const handleRequest = () => {
    addModificationRequests({"productId": props.data.productId, "comments": comments, "status": "Pending"}).then(() => {
        setComments("");
        fetchData();
    });
  };

  const addCartHandler = async (req:any) => {
    props?.setCartComment(req?.comments)
    props?.addToCartWithComment();
  };

  return (
    <div className="justify-content-center mt-5 mb-2 p-2">
      <h4 className="fw-bold">Yes!!! This product can be Customize</h4>
      <Form onClick={handleRequest}>
        <Row>
          <Row>
            <div className=" mt-3 fs-3">Custom Request:</div>
          </Row>
          <Row>
            <Col>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder=""
                  id="floatingTextarea"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                ></textarea>
                <label htmlFor="floatingTextarea">Modification</label>
              </div>
            </Col>
            <Col>
              <Button className="btn-dark ms-5" onClick={(e) => {}}>
                Submit Request
              </Button>
            </Col>
          </Row>
          <Row>
            <div className=" mt-3 fs-3">Your Requests:</div>
          </Row>
          <Row>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {prevRequests.map((req:any, i: number): any => {
                  let buttonStatus;
                  
                  if (req?.status === "Approved") {
                    buttonStatus = (
                      <Button onClick={(e) => {addCartHandler(req)}} className="btn-dark">
                        Add to Cart
                      </Button>
                    );
                  } else {
                    buttonStatus = (
                      <Button
                        disabled
                        onClick={props.addToCart}
                        className="btn-dark"
                      >
                        Add to Cart
                      </Button>
                    );
                  }
                  return (
                    <>
                      <tr className="align-middle">
                        <th scope="row">{i + 1}</th>
                        <td style={{ minWidth: "300px" }}>{req?.comments}</td>
                        <td>{req?.status}</td>
                        <td>{buttonStatus}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </Row>
        </Row>
      </Form>
    </div>
  );
};

export default Customization;
