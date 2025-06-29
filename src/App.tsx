import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { clearUser } from "./features/auth/authSlice";
import styles from "./App.module.css";
import PostPage from "./pages/PostPage";

const App = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <BrowserRouter>
      <nav className={styles.navbar}>
        <div className={styles.navLinks}>
          <Link to="/">Best Application</Link>
        </div>
        <div>{user ? <button onClick={handleLogout}>Log Out</button> : <Link to="/login">Sign In</Link>}</div>
      </nav>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
