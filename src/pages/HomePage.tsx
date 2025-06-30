import { useSelector } from "react-redux";
import { useGetPostsQuery } from "../features/api/postsApi";
import styles from "./HomePage.module.css";
import type { RootState } from "../store";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HomePage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const { data, isLoading, error } = useGetPostsQuery();
  const { t } = useTranslation();

  if (isLoading) return <p>{t("global.loading")}</p>;
  if (error) return <p>{t("global.error")}</p>;

  return (
    <div>
      <h1>{t("home.title")}</h1>
      {user && (
        <h2>
          {t("home.welcome")}
          {user.name}!
        </h2>
      )}
      <div className={styles.container}>
        {data?.map((post) => (
          // <div className={styles.card} key={post.id}>
          <Link to={`/posts/${post.id}`} key={post.id} className={styles.card}>
            <img
              src={`https://picsum.photos/seed/${post.id}/300/200`}
              alt={post.title}
              className={styles.image}
            />
            {/* <div className={styles.imagePlaceholder}></div> */}
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.body}>{post.body.slice(0, 60) + " ..."}</p>
            </div>
          </Link>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
