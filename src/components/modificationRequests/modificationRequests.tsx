import { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import {
  getAllModifyRequests,
  updateModificaitonRequest,
} from "../../services/modificationRequests/modificationRequestsService";

const ModificaitionRequests = (props: any) => {
  const [prevRequests, setPrevRequests] = useState([]);
//   const profile = useSelector((state: TRootState) => state.profile.profileData);
//     console.log(profile, "---user profile!!!");
//     const isAdmin = profile?.userType.includes("admin");
//     console.log(isAdmin, "---admin profile");


  const fetchData = async () => {
    const rawData = await getAllModifyRequests(true);
    const data = rawData?.data?.notifications;
    setPrevRequests(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateRequest = (modificationRequestsId:any, status: any) => {
    updateModificaitonRequest(status, modificationRequestsId).then(() => fetchData());
  }

  const handleRequest = (status: any, modificationRequestsId: any) => {
    let action: any = null;
    if (status === "Approved") {
      action = (
        <Row>
          <h4 className="text-success">Approved</h4>
        </Row>
      );
    } else if (status === "Rejected") {
      action = (
        <Row>
          <h4 className="text-danger">Rejected</h4>
        </Row>
      );
    } else if (status === "Pending") {
      console.log("Reached here!!!");
      action = (
        <Row style={{ maxWidth: "150px" }}>
          <Col>
            <Button onClick={() => handleUpdateRequest(modificationRequestsId, "Rejected")} className="btn-danger">
              No
            </Button>
          </Col>
          <Col>
            <Button onClick={() => handleUpdateRequest(modificationRequestsId, "Approved")} className="btn-info">
              Yes
            </Button>
          </Col>
        </Row>
      );
    }
    return action;
  };

  return (
    <div className="justify-content-center ms-4 me-1 mt-5 mb-2 p-2">
      <h4 className="fw-bold fs-2">Product Customization Requests:</h4>
      <Form>
        <Row>
          <Row>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">ProductId</th>
                  <th scope="col">UserId</th>
                  <th scope="col">Comment</th>
                  <th scope="col" className="ps-5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {prevRequests.map((req: any, i: number) => {
                  return (
                    <>
                      <tr className="align-middle">
                        <th scope="row">{i + 1}</th>
                        <td>{req.product.name}</td>
                        <td>{req.user.firstName + " " + req.user.lastName}</td>
                        <td style={{ minWidth: "300px" }}>{req.comments}</td>
                        <td>{handleRequest(req.status, req.id)}</td>
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

export default ModificaitionRequests;
