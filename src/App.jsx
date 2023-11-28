import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import RoomOne from './pages/RoomOne/RoomOne';
import RoomDetails from "./pages/RoomDetails/RoomDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/RoomOne" element={<RoomOne/>}/>
        <Route path="/RoomDetails" element={<RoomDetails/>}/>

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
