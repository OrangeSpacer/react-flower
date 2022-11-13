import { useEffect } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import { useAction } from "./hooks/useAction";
import { useTypesSelector } from "./hooks/useTypesSelector";
import About from "./page/About/About";
import Auth from "./page/Auth/Auth";
import Catalog from "./page/Catalog";
import Contact from "./page/Contact/Contact";
import Delivery from "./page/Delivery/Delivery";
import FAQ from "./page/FAQ/FAQ";
import Home from "./page/Home";
import Profile from "./page/Profile/Profile";

function App() {
  const {auth} = useTypesSelector(state => state.auth)
  const {fetchAuth} = useAction()
  useEffect(() => {
    fetchAuth()
  },[auth])
  return (
    <div className="App">
        <BrowserRouter>
          <RootLayout>
            <Routes>
              <Route path="/auth" element={<Auth/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/catalog" element={<Catalog/>}/>
              <Route path="/delivery" element={<Delivery/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contacts" element={<Contact/>}/>
              <Route path="/FAQ" element={<FAQ/>}/>
            </Routes>
          </RootLayout>
        </BrowserRouter>
    </div>
  );
}

export default App;
