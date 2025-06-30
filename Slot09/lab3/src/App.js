import 'bootstrap/dist/css/bootstrap.min.css';

function PizzaHome() {
  const pizzas = [
    {
      name: 'Margherita Pizza',
      image: '/images/margherita_pizza.png',
      originalPrice: 40,
      salePrice: 24,
      badge: 'SALE',
    },
    {
      name: 'Mushroom Pizza',
      image: '/images/mushroom_pizza.png',
      originalPrice: 25,
      salePrice: 25,
      badge: '',
    },
    {
      name: 'Hawaiian Pizza',
      image: '/images/hawaiian_pizza.png',
      originalPrice: 30,
      salePrice: 30,
      badge: 'NEW',
    },
    {
      name: 'Pesto Pizza',
      image: '/images/pesto_pizza.png',
      originalPrice: 40,
      salePrice: 30,
      badge: 'SALE',
    },
  ];

  return (
    <>
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

      <section className="bg-dark text-white py-5">
        <div className="container">
          <h3 className="mb-4">Our Menu</h3>
          <div className="row g-4">
            {pizzas.map((pizza, index) => (
              <div className="col-3" key={index}>
                <div className="card h-100" style={{ border: 'none', background: '#fff', borderRadius: '15px', overflow: 'hidden' }}>
                  <div className="position-relative">
                    <img src={pizza.image} className="card-img-top" alt={pizza.name} style={{ height: '200px', objectFit: 'cover' }} />
                    {pizza.badge && (
                      <span className="badge bg-warning position-absolute top-0 start-0 m-2" style={{ fontSize: '0.9rem', padding: '0.25rem 0.5rem' }}>{pizza.badge}</span>
                    )}
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between p-3">
                    <div>
                      <h5 className="card-title text-dark mb-2" style={{ fontSize: '1.25rem', fontWeight: '600' }}>{pizza.name}</h5>
                      {pizza.salePrice < pizza.originalPrice ? (
                        <p className="card-text mb-2">
                          <del className="text-muted">${pizza.originalPrice}</del>
                          <span className="text-danger fw-bold">${pizza.salePrice}</span>
                        </p>
                      ) : (
                        <p className="card-text mb-2 fw-bold">${pizza.salePrice}</p>
                      )}
                    </div>
                    <button className="btn btn-dark w-100 mt-auto" style={{ borderRadius: '5px' }}>Buy</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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