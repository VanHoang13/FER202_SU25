import React from 'react';
import carImage from './images/xe_trang.png';

const CardColumns = () => {
  return (
    <div className="container my-4">
      <h3 className="fw-bold mb-4">Cards Columns</h3>
      <div className="row text-center">
        {/* Card 1 */}
        <div className="col-md-4 mb-3">
          <div className="card border-0 bg-primary text-white p-2">
            <img src={carImage} className="card-img-top" alt="Car" />
            <div className="card-body">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-3">
          <div className="card border-0 bg-warning text-dark p-2">
            <img src={carImage} className="card-img-top" alt="Car" />
            <div className="card-body">
              <p className="card-text">Some text inside the second card</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-3">
          <div className="card border-0 bg-danger text-white p-2">
            <img src={carImage} className="card-img-top" alt="Car" />
            <div className="card-body">
              <p className="card-text">Some text inside the third card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardColumns;
