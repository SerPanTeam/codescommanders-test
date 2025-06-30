import { useParams, Link } from "react-router-dom";
import { useGetPostsQuery } from "../features/api/postsApi";
import { useGetCommentsByPostIdQuery } from "../features/api/commentsApi";
import styles from "./PostPage.module.css";
import { useTranslation } from "react-i18next";

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const { data: posts } = useGetPostsQuery();
  const { data: comments, isLoading } = useGetCommentsByPostIdQuery(postId);

  const post = posts?.find((p) => p.id === postId);
  const { t } = useTranslation();

  if (!post) return <p>{t("post.notFound")}</p>;

  return (
    <div className={styles.container}>
      <img
        src={`https://picsum.photos/seed/${post.id}/800/300`}
        alt="Post image"
        className={styles.image}
      />
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.body}>{post.body}</p>

      <h2>{t("post.comments")}</h2>
      <div className={styles.comments}>
        {isLoading && <p>{t("post.loadingComments")}</p>}
        {comments?.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <p className={styles.commentName}>{comment.name}</p>
            <p className={styles.commentEmail}>{comment.email}</p>
            <p className={styles.commentBody}>{comment.body}</p>
          </div>
        ))}
      </div>

      <Link to="/" className={styles.backLink}>
        {t("post.back")}
      </Link>
    </div>
  );
};

export default PostPage;
