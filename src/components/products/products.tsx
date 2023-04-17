import { Link } from "react-router-dom";

const Product = (props: any) => {
  const productRating: number = props?.data?.rating;
  let starRating: Array<any> = [];
  for (let i: number = 1; i <= productRating; i++) {
    starRating.push(
      <span key={i} className="fa fa-star checked d-inline"></span>
    );
  }

  for (let i: number = productRating + 1; i <= 5; i++) {
    starRating.push(<span key={i} className="fa fa-star"></span>);
  }

  const temp: Array<any> = [];
  temp.push(<span className="fa fa-star checked"></span>);
  temp.push(<span className="fa fa-star checked"></span>);
  const productInfoRoute = `/productInfo/${props?.data?.id}`;

  return (
    <div className="main-product-list">
      <div className="product-card">
        <div className="container main-product-container">
          <div className="card">
            <div className="card-header">
              <img src={props?.data?.thumbnailImage} height='200px' style={{minHeight: '200px', maxHeight: '200px'}} alt="rover" />
            </div>
            <div className="card-body">
              <div className="d-inline first-row">
                {/* <span className="tag tag-teal">{props?.data?.used_type || null}</span> */}
                <div className="text-end ms-5 d-inline">{starRating}</div>
              </div>
              {props?.data?.name}
              <p className="card-text">Price: {props?.data?.price}</p>
              <Link
                to={productInfoRoute}
                className="btn btn-primary"
                style={{ textDecoration: "none" }}
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
