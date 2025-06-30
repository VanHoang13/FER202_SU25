import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  return (
    <div className="container my-4">
        
      <h3 className="fw-bold p-2">Cards Columns</h3>

      <div className="row mt-3 g-4">
        <div className="col-md-4">
          <div className="card text-center" style={{ border: '8px solid #007bff', width: '22rem' }}>
            <img src="/image/oto.png" className="card-img-top" alt="Car" />
            <div className="card-body" style={{ backgroundColor: '#007bff' }}>
              <p className="card-text text-dark fw-semibold m-0">
                Some text inside the first card
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center" style={{ border: '8px solid #ffc107', width: '22rem' }}>
            <img src="/image/oto.png" className="card-img-top" alt="Car" />
            <div className="card-body" style={{ backgroundColor: '#ffc107' }}>
              <p className="card-text text-dark fw-semibold m-0">
                Some text inside the first card
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center" style={{ border: '8px solid #dc3545', width: '22rem' }}>
            <img src="/image/oto.png" className="card-img-top" alt="Car" />
            <div className="card-body" style={{ backgroundColor: '#dc3545' }}>
              <p className="card-text text-dark fw-semibold m-0">
                Some text inside the first card
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
