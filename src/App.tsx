import { MainLayout } from "src/layouts/mainLayout/MainLayout";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "src/pages/Home/Home";
import { Login } from "src/pages/Login/Login";
import { Blogs } from "src/pages/Blogs/Blogs";
import { Blog } from "src/pages/Blog/Blog";
import { Shop } from "src/pages/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Shop />}
          />
          <Route
            path="/blogs"
            element={<Blogs />}
          />
          <Route
            path="/blog/:id"
            element={<Blog />}
          />
          <Route
            path="/shop"
            element={<Shop />}
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
