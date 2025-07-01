import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { clearUser, setUser } from "./features/auth/authSlice";
import styles from "./App.module.css";
import PostPage from "./pages/PostPage";
import { PrivateRoute } from "./components/PrivateRoute";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useEffect } from "react";

const App = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <div className={styles.langBar}>
        <LanguageSwitcher />
      </div>

      <nav className={styles.navbar}>
        <div className={styles.navLinks}>
          <Link to="/">{t("home.title")}</Link>
        </div>
        <div>
          {user ? (
            <button onClick={handleLogout}>{t("nav.logOut")}</button>
          ) : (
            <Link to="/login">{t("login.signIn")}</Link>
          )}
        </div>
      </nav>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/posts/:id"
            element={
              <PrivateRoute>
                <PostPage />
              </PrivateRoute>
            }
          />{" "}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
