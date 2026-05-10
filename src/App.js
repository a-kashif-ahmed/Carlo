import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WelcomeScreen from './Pages/WelcomeScreen';
import bg from "./assets/wew.jpg"
import SuitCustomizer from './Components/SuiteCustomizer';
import MeasurementGuide from './Pages/Measurement';
import Checkout from './Pages/Checkout';
import OrderSuccess from './Pages/OrderSuccess';

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeScreen />} />
          <Route path='/customize' element={<SuitCustomizer />} />
          <Route path='/measurement' element={<MeasurementGuide />} />
          <Route
            path="/checkout"
            element={<Checkout/>}
          />

          <Route
            path="/order-success" 
            element={<OrderSuccess/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}


