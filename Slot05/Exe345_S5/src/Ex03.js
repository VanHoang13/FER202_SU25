import 'bootstrap/dist/css/bootstrap.min.css';
function Ex03() {
  return (
    <div>
      <header className="p-4 bg-light mb-3">
        <h3>Let's test the grid!</h3>
      </header>

      <nav className="mb-3 px-3">
        <a href="#" className="text-primary me-3">Active</a>
        <a href="#" className="text-primary me-3">Link</a>
        <a href="#" className="text-primary me-3">Link</a>
        <span className="text-muted">Disabled</span>
      </nav>

      <div className="container">
        {/* row 1 */}
        <div className="row mb-2">
          <div className="col border bg-secondary text-dark py-2">
            First col
          </div>
          <div className="col border bg-secondary text-dark py-2">
            Second col
          </div>
        </div>

        {/* row 2 */}
        <div className="row mb-2">
          <div className="col-4 border bg-secondary text-dark py-2">col</div>
          <div className="col-4 border bg-secondary text-dark py-2">col</div>
          <div className="col-4 border bg-secondary text-dark py-2">col</div>
        </div>

        {/* row 3 */}
        <div className="row">
          <div className="col border bg-secondary text-dark py-2">col</div>
          <div className="col border bg-secondary text-dark py-2">col</div>
          <div className="col border bg-secondary text-dark py-2">col</div>
          <div className="col border bg-secondary text-dark py-2">col</div>
        </div>
      </div>

      <footer
        className="p-3 mt-4 text-center"
        style={{ backgroundColor: "#bca9a6", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        Created by ABC!
      </footer>
    </div>
  );
}

export default Ex03;
