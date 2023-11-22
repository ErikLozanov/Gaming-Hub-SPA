import styles from "../Shop/Comments.module.css";


export default function Comment({comment}) {
    return (
        <div className={styles["be-comment"]}>
        <div className={styles["be-img-comment"]}>
          <a href="blog-detail-2.html">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
              className={styles["be-ava-comment"]}
            />
          </a>
        </div>
        <div className={styles["be-comment-content"]}>
          <span className={styles["be-comment-name"]}>
            <a href="blog-detail-2.html">{comment._ownerId.email}</a>
          </span>
          <span className={styles["be-comment-time"]}>
            <i className={styles["fa fa-clock-o"]} />
            {comment.commentDate}
          </span>
          <p className={styles["be-comment-text"]}>{comment.text}</p>
        </div>
      </div>
    );
}