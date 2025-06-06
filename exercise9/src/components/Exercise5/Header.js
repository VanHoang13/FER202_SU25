import { Container } from 'react-bootstrap';
import fptLogo from '../../assets/images/fpt-logo.png';

function Header() {
    return (
      <div style={{ backgroundColor: '#f7941d', padding: '2rem 0', textAlign: 'center' }}>
        <Container>
          <img
            src={fptLogo}
            alt="FPT University Banner"
            style={{
              maxWidth: '350px',
              height: 'auto',
              marginBottom: '1rem',
              borderRadius: '5px',
            }}
          />
          <div>
            <a href="#home" className="mx-2 text-white text-decoration-none">Home</a>
            <a href="#about" className="mx-2 text-white text-decoration-none">About</a>
            <a href="#contact" className="mx-2 text-white text-decoration-none">Contact</a>
          </div>
        </Container>
      </div>
    );
  }
  
  export default Header;