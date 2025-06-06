import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import CardComponent from './components/CardComponent';
import ReservationForm from './components/ReservationForm';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CarouselComponent />
              <CardComponent />
              <ReservationForm />
            </>
          }
        />
        <Route path="/about" element={<div>About Us Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </div>
  );
}

export default App;