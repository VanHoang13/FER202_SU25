function ReservationForm() {
  return (
    <div className="container p-5">
      <h2 className="text-center mt-3 mb-4">Book your table</h2>
      <form className="reservation-form">
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="formName" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formName"
              placeholder="Enter your name"
            />
          </div>
          <div className="col">
            <label htmlFor="formEmail" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="formEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className="col">
            <label htmlFor="formServer" className="form-label">
              Select a Server
            </label>
            <select className="form-select" id="formServer" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Server 1</option>
              <option>Server 2</option>
              <option>Server 3</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="formTextArea" className="form-label">
              Additional Requests
            </label>
            <textarea
              className="form-control"
              id="formTextArea"
              rows="3"
              placeholder="Enter any additional requests"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-warning">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;