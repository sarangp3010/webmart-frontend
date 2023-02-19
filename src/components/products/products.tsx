import "../../stylesheets/pages/_products.scss"

const Product = (props: any) => {

    const productRating: number = props.data.rating;
    let starRating: Array<any> = [];
    for (let i: number = 0; i <= productRating; i++) {
        starRating.push(<span key={i} className="fa fa-star checked d-inline"></span>);
    }

    for (let i: number = productRating + 1; i <= 5; i++) {
        starRating.push(<span key={i} className="fa fa-star"></span>);
    }

    const temp: Array<any> = [];
    temp.push(<span className="fa fa-star checked"></span>);
    temp.push(<span className="fa fa-star checked"></span>);
    console.log("Done!!");

    return (
        <div className="main-product-list">
            <div className="product-card">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <img src={props.data.img} alt="rover" />
                        </div>
                        <div className="card-body">
                            <div className="d-inline first-row">
                                <span className="tag tag-teal">{props.data.used_type}</span>
                                <div className="text-end ms-5 d-inline">
                                    {starRating}
                                </div>
                            </div>
                            <p className="card-text mt-3">{props.data.name}</p>
                            <p className="card-text">Price: {props.data.price}</p>
                            <a href="" className="btn btn-primary">Buy</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;