import { BrowserRouter,Route,Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import Auth from "./page/Auth/Auth";
import Catalog from "./page/Catalog";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <RootLayout>
            <Routes>
              <Route path="/auth" element={<Auth/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/catalog" element={<Catalog/>}/>
            </Routes>
          </RootLayout>
        </BrowserRouter>
    </div>
  );
}

export default App;
