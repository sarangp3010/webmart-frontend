import card1 from "./img/card1.png";
import bands from "./img/Bands.webp";
import utensils from "./img/Utensils.jpeg";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";
import card4 from "./img/card4.png";
import card5 from "./img/card5.png";
import card6 from "./img/lamp.webp";
import card7 from "./img/Fitness.webp";
import card8 from "./img/powerbank.jpg";
import card9 from "./img/Dryer.webp";
import card10 from "./img/case.jpeg";
import weblogo from "./img/Webmart_logo.jpeg";
import user from "./img/user.png";
import cart from "./img/cart.png";
import bottle from "./img/Bottle.webp";
import headphones from "./img/headphones.jpeg";
import kettle from "./img/kettle.webp";

const Dashboard = () => {
  
  return (<>

       {/* <nav className="navbar">
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
       </nav> */}

        

        <header className="hero-section">
          <div className="content">
              
              <p className="sub-heading">Shop smarter, not harder.</p>
          </div>
        </header>
 
  
<section className="product">
  <h2 className="product-category">Hot Deals</h2>
  
  <div className="product-container">
     <div className="product-card">
        <div className="product-image">
        <span className="discount-tag">50% off</span>
           <img src={card6} className="product-thumb" alt=""/>
           <button className="card-btn">Buy</button>
        </div>
        <div className="product-info">
             <h2 className="product-brand">Desk Lamp</h2>
             
             <span className="price">$200</span><span className="actual-price">$400</span>
        </div>
     </div>
     <div className="product-card">
       <div className="product-image">
       <span className="discount-tag">60% off</span>
          <img src={card7} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Fitness Tracker</h2>
            
            <span className="price">$100</span><span className="actual-price">$250</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card8} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Power Bank</h2>
            
            <span className="price">$150</span><span className="actual-price">$300</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={card9} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Hair Dryer</h2>
            
            <span className="price">$200</span><span className="actual-price">$400</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <span className="discount-tag">20% off</span>
          <img src={card10} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Smartphone Case</h2>
            
            <span className="price">$100</span><span className="actual-price">$125</span>
       </div>
    </div>
  </div>
</section>

<section className="product">
  <h2 className="product-category">Clothing</h2>
  
  <div className="product-container">
     <div className="product-card">
        <div className="product-image">
           
           <img src={card1} className="product-thumb" alt=""/>
           <button className="card-btn">Buy</button>
        </div>
        <div className="product-info">
             <h2 className="product-brand">Nike</h2>
             
             <span className="price">$210</span>
        </div>
     </div>
     <div className="product-card">
       <div className="product-image">
          
          <img src={card2} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Wrogn</h2>
            
            <span className="price">$140</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <img src={card3} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Columbia</h2>
            
            <span className="price">$80</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <img src={card4} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Calvin Klein</h2>
            
            <span className="price">$130</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          <img src={card5} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Chanel</h2>
            
            <span className="price">$160</span>
       </div>
    </div>
  
  </div>
</section>


<section className="product">
  <h2 className="product-category">Miscellaneous</h2>
  
  <div className="product-container">
     <div className="product-card">
        <div className="product-image">
           <img src={utensils} className="product-thumb" alt=""/>
           <button className="card-btn">Buy</button>
        </div>
        <div className="product-info">
             <h2 className="product-brand">Cooking Utensils Set</h2>
             
             <span className="price">$300</span>
        </div>
     </div>
     <div className="product-card">
       <div className="product-image">
          
          <img src={bands} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Resistance Bands</h2>
            
            <span className="price">$200</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
          
          <img src={bottle} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Watter Bottle</h2>
            
            <span className="price">$300</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
         
          <img src={headphones} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Wireless Headphones</h2>
            
            <span className="price">$100</span>
       </div>
    </div>
    <div className="product-card">
       <div className="product-image">
         
          <img src={kettle} className="product-thumb" alt=""/>
          <button className="card-btn">Buy</button>
       </div>
       <div className="product-info">
            <h2 className="product-brand">Electric Kettle</h2>
            
            <span className="price">$300</span>
       </div>
    </div>
  </div>
</section>


</>)


  
};

export default Dashboard;
