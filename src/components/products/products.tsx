import "../../stylesheets/pages/_products.scss"

const Product = (props: any) => {
    return (
        <div>
            <div className="">
                <div className="">
                    {/* <img width={200} height={200} src={props.data.img} alt="none"/>
            <h5 className="card-title">{props.data.name}</h5>
            <p className="card-text">{props.data.description}</p>
            <p className="card-text">Price: ${props.data.price}</p>
            <a href="#" className="btn btn-primary">Buy</a> */}

                    <div className="container">
                        <div className="card">
                            <div className="card-header">
                                <img src={props.data.img} alt="rover" />
                            </div>
                            <div className="card-body">
                                <span className="tag tag-teal">{props.data.Used_type}</span>
                                <p className="card-text">{props.data.description}</p>
                                <p className="card-text">Price: ${props.data.price}</p>
                                <a href="#" className="btn btn-primary">Buy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>)
};

export default Product;