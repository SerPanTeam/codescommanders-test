import { useEffect, useState } from "react";
import { useLazyGetUserByUsernameQuery } from "../features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { Toast } from "../components/Toast";
import styles from "./LoginPage.module.css";
import type { AppDispatch } from "../store";
import { useTranslation } from "react-i18next";

export const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState("");
  const [showToast, setShowToast] = useState("");

  const navigate = useNavigate();
  const [trigger, { data, isLoading, error }] = useLazyGetUserByUsernameQuery();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === "") {
      setShowToast(t("login.enterUsername"));
      return;
    }
    trigger(username);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setUser(data[0]));
      navigate("/");
    } else if (data && data.length === 0) {
      setShowToast(t("login.userNotFound"));
    }
  }, [data, navigate, dispatch, t]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  if (isLoading) return <p>{t("global.loading")}</p>;
  if (error) return <p>{t("global.error")}</p>;

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginBox}>
        <h2>{t("login.signIn")}</h2>

        <input
          type="text"
          placeholder={t("login.usernamePlaceholder") + " (Bret)"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <button
          disabled={username.trim() === ""}
          type="submit"
          className={styles.button}
        >
          {t("login.send")}
        </button>
      </form>
      <Toast message={showToast} />
    </div>
  );
};
