import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Layout from "./Layout/Layout";
import HomePage from "pages/HomePage";
import TeachersPage from "pages/TeachersPage";
import FavoritePage from "pages/FavoritePage";

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route path="favorite" element={<FavoritePage />} />
        </Route>
      </Routes>
    </div>
  );
};
