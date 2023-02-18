import card1 from "./img/card1.png";
import arrow from "./img/arrow.png";
import light from "./img/light-logo.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";
import card4 from "./img/card4.png";
import card5 from "./img/card5.png";
import card6 from "./img/card6.png";
import card7 from "./img/card7.png";
import card8 from "./img/card8.png";
import weblogo from "./img/Webmart_logo.jpeg";
import user from "./img/user.png";
import cart from "./img/cart.png";

const Dashboard = () => {
  
  return (<>

       <nav className="navbar">
       <div className="nav">
    <img src={weblogo} className="brand-logo"/>
    <div className="nav-items">
        <div className="search">
             <input type="text" className="search-box" placeholder="Search Products"/>
             <button className="search-btn">Search</button>
        </div>
        <a href="#"><img src={user} alt="User"/></a>
        <a href="#"><img src={cart} alt="Cart"/></a>
        
    </div>
    </div>
       </nav>

        <script src="home_scroll.tsx">
          
        </script>

        <header className="hero-section">
          <div className="content">
              <img src={light} className="logo" alt=""/>
              <p className="sub-heading">Shop smarter, not harder.</p>
          </div>
        </header>
 
  <section className="product">
  <h2 className="product-category">Hot Deals</h2>
  <button className="pre-btn"><img src={arrow} alt="" /></button>
  <button className="nxt-btn"><img src={arrow} alt=""/></button>
  <div className="product-container">
     <div className="product-card">
        <div className="product-image">
           <span className="discount-tag">50% off</span>
           <img src={card1} className="product-thumb" alt=""/>
           <button className="card-btn">Buy</button>
        </div>
        <div className="product-info">
             <h2 className="product-brand">brand</h2>
             <p className="product-short-des">a short line about the product..</p>
             <span className="price">$20</span><span className="actual-price">$40</span>
        </div>
     </div>
     <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card2} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card3} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card4} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card5} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card6} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card7} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card8} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
  </div>
</section>

<section className="product">
  <h2 className="product-category">Clothing</h2>
  <button className="pre-btn"><img src={arrow} alt="" /></button>
  <button className="nxt-btn"><img src={arrow} alt=""/></button>
  <div className="product-container">
     <div className="product-card">
        <div className="product-image">
           <span className="discount-tag">50% off</span>
           <img src={card1} className="product-thumb" alt=""/>
           <button className="card-btn">Buy</button>
        </div>
        <div className="product-info">
             <h2 className="product-brand">brand</h2>
             <p className="product-short-des">a short line about the product..</p>
             <span className="price">$20</span><span className="actual-price">$40</span>
        </div>
     </div>
     <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card2} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card3} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card4} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card5} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card6} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card7} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card8} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
  </div>
</section>

<section className="product">
  <h2 className="product-category">Electronics</h2>
  <button className="pre-btn"><img src={arrow} alt="" /></button>
  <button className="nxt-btn"><img src={arrow} alt=""/></button>
  <div className="product-container">
     <div className="product-card">
        <div className="product-image">
           <span className="discount-tag">50% off</span>
           <img src={card1} className="product-thumb" alt=""/>
           <button className="card-btn">Buy</button>
        </div>
        <div className="product-info">
             <h2 className="product-brand">brand</h2>
             <p className="product-short-des">a short line about the product..</p>
             <span className="price">$20</span><span className="actual-price">$40</span>
        </div>
     </div>
     <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card2} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card3} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card4} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card5} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card6} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card7} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card8} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-des">a short line about the product..</p>
            <span className="price">$20</span><span className="actual-price">$40</span>
       </div>
    </div>
  </div>
</section>


</>)


  
};

export default Dashboard;
