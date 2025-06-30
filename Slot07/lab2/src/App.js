import 'bootstrap/dist/css/bootstrap.min.css';

function PizzaHome() {
  return (
    <>
      {/* Navbar không responsive, luôn hiện menu */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">Pizza House</a>
          <div>
            <a className="nav-link d-inline text-white px-2" href="#">Home</a>
            <a className="nav-link d-inline text-white px-2" href="#">About Us</a>
            <a className="nav-link d-inline text-white px-2" href="#">Contact</a>
          </div>
          <form className="d-flex" role="search" style={{ maxWidth: 250 }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-danger" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {/* Banner tĩnh không carousel */}
      <div
        style={{
          height: '400px',
          backgroundImage: "url('/images/nepolitan_pizza.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '0 1rem',
        }}
      >
        <h2>Neapolitan Pizza</h2>
        <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
      </div>

      {/* Our Menu */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h3 className="mb-4">Our Menu</h3>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-3">
              <div className="card">
                <div className="position-relative">
                  <img src="/images/margherita_pizza.png" className="card-img-top" alt="Margherita Pizza" />
                  <span className="badge bg-warning position-absolute top-0 start-0 m-2">SALE</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <p className="card-text">
                    <del className="text-muted">$40.00</del> <span className="text-danger">$24.00</span>
                  </p>
                  <button className="btn btn-dark w-100">Buy</button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-3">
              <div className="card">
                <img src="/images/mushroom_pizza.png" className="card-img-top" alt="Mushroom Pizza" />
                <div className="card-body">
                  <h5 className="card-title">Mushroom Pizza</h5>
                  <p className="card-text">$25.00</p>
                  <button className="btn btn-dark w-100">Buy</button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-3">
              <div className="card">
                <div className="position-relative">
                  <img src="/images/hawaiian_pizza.png" className="card-img-top" alt="Hawaiian Pizza" />
                  <span className="badge bg-warning position-absolute top-0 start-0 m-2">NEW</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Hawaiian Pizza</h5>
                  <p className="card-text">$30.00</p>
                  <button className="btn btn-dark w-100">Buy</button>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-3">
              <div className="card">
                <div className="position-relative">
                  <img src="/images/pesto_pizza.png" className="card-img-top" alt="Pesto Pizza" />
                  <span className="badge bg-warning position-absolute top-0 start-0 m-2">SALE</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Pesto Pizza</h5>
                  <p className="card-text">
                    <del className="text-muted">$40.00</del> <span className="text-danger">$30.00</span>
                  </p>
                  <button className="btn btn-dark w-100">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Table */}
      <section className="py-5 bg-dark text-white">
        <div className="container" style={{ maxWidth: 800 }}>
          <h3 className="mb-4">Book Your Table</h3>
          <form>
            <div className="row g-3 mb-3">
              <div className="col-4">
                <input type="text" className="form-control" placeholder="Your Name *" required />
              </div>
              <div className="col-4">
                <input type="email" className="form-control" placeholder="Your Email *" required />
              </div>
              <div className="col-4">
                <select className="form-select" required>
                  <option value="" disabled selected>Select a Service</option>
                  <option value="dine-in">Dine In</option>
                  <option value="takeaway">Take Away</option>
                  <option value="delivery">Delivery</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Please write your comment"></textarea>
            </div>
            <button type="submit" className="btn btn-warning w-100">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default PizzaHome;
