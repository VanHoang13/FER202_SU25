import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";

function CardComponent() {
  return (
    <div className="container p-5">
      <h1 className="text-start p-3">Our Menu</h1>
      <div className="d-flex flex-wrap">
        <div className="card mx-3 position-relative" style={{ width: "18rem" }}>
          <div className="label">SALE</div>
          <img src={menu1} className="card-img-top" alt="Margherita Pizza" />
          <div className="card-body">
            <h5 className="card-title">Margherita Pizza</h5>
            <p className="card-text">Price: $19.99</p>
            <button className="btn btn-dark w-100 text-center">Buy</button>
          </div>
        </div>
        <div className="card mx-3" style={{ width: "18rem" }}>
          <img src={menu2} className="card-img-top" alt="Mushroom Pizza" />
          <div className="card-body">
            <h5 className="card-title">Mushroom Pizza</h5>
            <p className="card-text">Price: $19.99</p>
            <button className="btn btn-dark w-100 text-center">Buy</button>
          </div>
        </div>
        <div className="card mx-3 position-relative" style={{ width: "18rem" }}>
          <div className="label">NEW</div>
          <img src={menu3} className="card-img-top" alt="Hawaiian Pizza" />
          <div className="card-body">
            <h5 className="card-title">Hawaiian Pizza</h5>
            <p className="card-text">Price: $19.99</p>
            <button className="btn btn-dark w-100 text-center">Buy</button>
          </div>
        </div>
        <div className="card mx-3 position-relative" style={{ width: "18rem" }}>
          <div className="label">SALE</div>
          <img src={menu4} className="card-img-top" alt="Pesto Pizza" />
          <div className="card-body">
            <h5 className="card-title">Pesto Pizza</h5>
            <p className="card-text">Price: $19.99</p>
            <button className="btn btn-dark w-100 text-center">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;