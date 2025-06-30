import 'bootstrap/dist/css/bootstrap.min.css';

function Ex04() {
  return (
    <div>
      <header style={{ backgroundColor: "#f18a03", padding: "10px 0" }} className="text-center">
        <img
          src="\image\fptu.png"
          alt="FPT Education"
          style={{ maxWidth: "300px" }}
        />
        <h2 className="text-white mt-2" style={{ fontWeight: "bold" }}>FPT UNIVERSITY</h2>
        <nav>
          <a href="#home" className="text-white mx-2">Home</a>
          <a href="#about" className="text-white mx-2">About</a>
          <a href="#contact" className="text-white mx-2">Contact</a>
        </nav>
      </header>

      <main className="container my-5">
        <section id="about" className="mb-5 text-center">
          <h3><strong>About</strong></h3>
          <p>This is the about section of the website.</p>
        </section>

        <section id="contact" className="text-center">
          <h3><strong>Contact</strong></h3>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>

      <footer style={{ backgroundColor: "#f3c374", padding: "15px 0" }} className="text-center">
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
}

export default Ex04;
