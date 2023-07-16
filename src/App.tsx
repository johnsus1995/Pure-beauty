import { MainLayout } from "src/layouts/mainLayout/MainLayout";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "src/pages/Home/Home";
import { Login } from "src/pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Home />}
          />
        </Route>
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
