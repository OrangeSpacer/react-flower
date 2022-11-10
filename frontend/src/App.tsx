import { useEffect } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import { useAction } from "./hooks/useAction";
import { useTypesSelector } from "./hooks/useTypesSelector";
import Auth from "./page/Auth/Auth";
import Catalog from "./page/Catalog";
import Home from "./page/Home";
import Profile from "./page/Profile/Profile";

function App() {
  const {auth} = useTypesSelector(state => state.auth)
  const {fetchAuth,loginAuth,logoutAuth,registerAuth} = useAction()
  useEffect(() => {
    fetchAuth()
    // logoutAuth()
  },[auth])
  console.log(auth)
  return (
    <div className="App">
        <BrowserRouter>
          <RootLayout>
            <Routes>
              <Route path="/auth" element={<Auth/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/catalog" element={<Catalog/>}/>
            </Routes>
          </RootLayout>
        </BrowserRouter>
    </div>
  );
}

export default App;
