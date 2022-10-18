import { BrowserRouter, createBrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import RootLayout from "./components/RootLayout/RootLayout";
import Home from "./page/Home";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <App/>
    }
  ])
  return (
    <div className="App">
        <BrowserRouter>
          <RootLayout>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </RootLayout>
        </BrowserRouter>
    </div>
  );
}

export default App;
