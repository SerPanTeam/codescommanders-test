import { useEffect, useState } from "react";
import { useLazyGetUserByUsernameQuery } from "../features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { Toast } from "../components/Toast";
import styles from "./LoginPage.module.css";
import type { AppDispatch } from "../store";

export const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState("");
  const [showToast, setShowToast] = useState("");

  const navigate = useNavigate();
  const [trigger, { data, isLoading, error }] = useLazyGetUserByUsernameQuery();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === "") {
      setShowToast("Введите имя пользователя");
      return;
    }
    trigger(username);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setUser(data[0]));
      navigate("/");
    } else if (data && data.length === 0) {
      setShowToast("Пользователь не найден!");
    }
  }, [data, navigate, dispatch]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginBox}>
        <h2>Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <button disabled={username.trim() === ""} type="submit" className={styles.button}>
          Send
        </button>
      </form>
      <Toast message={showToast} />
    </div>
  );
};
