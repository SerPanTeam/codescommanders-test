import { useSelector } from "react-redux";
import { useGetPostsQuery } from "../features/api/postsApi";
import styles from "./HomePage.module.css";
import type { RootState } from "../store";
import { Link } from "react-router-dom";

function HomePage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка!</p>;

  return (
    <div>
      <h1>Главная</h1>
      {user && <h2>Добро пожаловать, {user.name}!</h2>}

      <div className={styles.container}>
        {data?.map((post) => (
          // <div className={styles.card} key={post.id}>
          <Link to={`/posts/${post.id}`} key={post.id} className={styles.card}>
            <div className={styles.imagePlaceholder}></div>
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
