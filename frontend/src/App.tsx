import { useEffect } from "react";
import { Route,Routes, useLocation } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import { useAction } from "./hooks/useAction";
import { useTypesSelector } from "./hooks/useTypesSelector";
import Admin from "./page/Admin/Admin";
import NotFound from "./page/NotFound/NotFound";
import Profile from "./page/Profile/Profile";
import { routes } from "./routes";

function App() {
  const {auth,role} = useTypesSelector(state => state.auth)
  const {fetchAuth} = useAction()
  let location = useLocation()
  
  useEffect(() => {
    fetchAuth()
  },[auth])


  return (
    <div className="App">
      <RootLayout>
        <Routes>
          {routes.map((item:any) => {
            return <Route key={item.path} path={item.path} element={<item.component/>}/>
          })}
          {role === "USER" ? 
              <Route path={"/profile"} element={<Profile/>}/>:
              <Route path={"/profile"} element={<Admin/>}/>
          }
          <Route path={location.pathname} element={<NotFound/>}/>
        </Routes>
      </RootLayout>
    </div>
  );
}

export default App;
