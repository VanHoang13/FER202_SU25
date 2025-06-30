import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Ex05() {
  const students = [
    {
      id: "DE180591",
      name: "Lê Phước Phú Lâm",
      location: "Hue",
      img: "/image/lam.png"
    },
    {
      id: "DE180549",
      name: "Nguyễn Song Gia Huy",
      location: "QuangNam",
      img: "/image/shuy.png"
    },
    {
      id: "DE160547",
      name: "Lê Văn Hoàng",
      location: "QuangBinh",
      img: "/image/hoang.png"
    },
    {
      id: "DE180527",
      name: "Nguyễn Văn Nam",
      location: "QuangNam",
      img: "/image/nam.png"
    }
  ];

  return (
    <div>
      <header>
        <div style={{ backgroundColor: "#f4d9bc", padding: "10px 20px" }}>
          <div className="container d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <img
                src="/image/fptu.png"
                alt="FPT Education"
                style={{ maxHeight: "60px" }}
              />
              <nav className="d-flex gap-3" style={{ color: "#f7c596", fontWeight: "bold" }}>
                <a href="#" style={{ color: "#f7c596", textDecoration: "none" }}>Trang chủ</a>
                <a href="#" style={{ color: "#f7c596", textDecoration: "none" }}>Ngành học</a>
                <a href="#" style={{ color: "#f7c596", textDecoration: "none" }}>Tuyển sinh</a>
                <a href="#" style={{ color: "#f7c596", textDecoration: "none" }}>Sinh viên</a>
              </nav>
            </div>

            <div>
              <label htmlFor="search" className="me-2" style={{ color: "#f7c596" }}>Search:</label>
              <input type="text" id="search" />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#ef7e1f", height: "10px" }}></div>
      </header>

      <div style={{ backgroundColor: "#ef7e1f" }} className="text-center p-3">
        <img
          src="/image/student.png"
          alt="Students Banner"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      <nav aria-label="breadcrumb" className="my-3 ms-3">
        <ol className="breadcrumb" style={{ backgroundColor: "#f7f7f7" }}>
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Students</li>
        </ol>
      </nav>

      <main className="container">
        <h2 className="text-center mb-4">Students Detail</h2>
        <div className="row g-1">
          {students.map((student, idx) => (
            <div key={idx} className="col-md-6 d-flex justify-content-center">
              <div className="card p-2 text-center shadow-sm h-100" style={{ maxWidth: '280px', width: '100%' }}>
                <img
                  src={student.img}
                  className="card-img-top"
                  alt={student.name}
                  style={{ maxHeight: "220px", objectFit: "cover", margin: "0 auto" }}
                />
                <div className="card-body">
                  <p className="mb-1">{student.id}</p>
                  <p className="mb-1">{student.name}</p>
                  <p>{student.location}</p>
                  <form>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" id={`absent${idx}`} name={`status${idx}`} />
                      <label className="form-check-label" htmlFor={`absent${idx}`}>Absent</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" id={`present${idx}`} name={`status${idx}`} />
                      <label className="form-check-label" htmlFor={`present${idx}`}>Present</label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-warning mt-2 px-4">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ backgroundColor: "#ef7e1f", padding: "30px 20px", marginTop: "30px" }} className="text-center text-white">
        <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h6>Our Address</h6>
            <p>Khu đô thị FPT Đà Nẵng</p>
            <p>📞 +08402311111</p>
            <p>📞 +852 8765 4321</p>
            <p>✉️ fptuinfo@fpt.edu.vn</p>
          </div>
          <div className="social-icons d-flex gap-3 fs-4">
            <a href="https://plus.google.com" target="_blank" rel="noreferrer" className="text-white">
              <i className="bi bi-google"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="mailto:fptuinfo@fpt.edu.vn" className="text-white">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
        <div className="mt-3">© Copyright 2023</div>
      </footer>
    </div>
  );
}

export default Ex05;
