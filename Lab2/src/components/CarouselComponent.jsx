import image1 from "../assets/pizza1.jpg";
import image2 from "../assets/pizza2.jpg";
import image3 from "../assets/pizza3.jpg";
import image4 from "../assets/pizza4.jpg";
import image5 from "../assets/pizza5.jpg";

const CarouselComponent = () => {
  return (
    <div id="pizzaCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="Neapolitan Pizza 1" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Neapolitan Pizza</h3>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="Neapolitan Pizza 2" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Neapolitan Pizza</h3>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="Neapolitan Pizza 3" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Neapolitan Pizza</h3>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image4} className="d-block w-100" alt="Neapolitan Pizza 4" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Neapolitan Pizza</h3>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image5} className="d-block w-100" alt="Neapolitan Pizza 5" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Neapolitan Pizza</h3>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#pizzaCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#pizzaCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;