import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, Success, Cancel} from "./components";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/success' element={<Success />} />
                <Route path='/cancel' element={<Cancel />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
