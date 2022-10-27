import { BrowserRouter,Route,Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import Catalog from "./page/Catalog";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <RootLayout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/catalog" element={<Catalog/>}/>
            </Routes>
          </RootLayout>
        </BrowserRouter>
    </div>
  );
}

export default App;
