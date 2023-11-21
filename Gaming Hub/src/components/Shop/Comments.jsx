import styles from "./Comments.module.css"

import Button from 'react-bootstrap/Button';

export default function Comments() {

    return (
        <>
  <div className="container">
  <div className={styles["be-comment-block"]}>
  <h1 className={styles["comments-title"]}>Comments (3)</h1>
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
        <a href="blog-detail-2.html">Ravi Sah</a>
      </span>
      <span className={styles["be-comment-time"]}>
        <i className={styles["fa fa-clock-o"]} />
        May 27, 2015 at 3:14am
      </span>
      <p className={styles["be-comment-text"]}>
        Pellentesque gravida tristique ultrices. Sed blandit varius mauris,
        vel volutpat urna hendrerit id. Curabitur rutrum dolor gravida
        turpis tristique efficitur.
      </p>
    </div>
  </div>
  <div className={styles["be-comment"]}>
    <div className={styles["be-img-comment"]}>
      <a href="blog-detail-2.html">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar2.png"
          alt=""
          className={styles["be-ava-comment"]}
        />
      </a>
    </div>
    <div className={styles["be-comment-content"]}>
      <span className={styles["be-comment-name"]}>
        <a href="blog-detail-2.html">Phoenix, the Creative Studio</a>
      </span>
      <span className={styles["be-comment-time"]}>
        <i className={styles["fa fa-clock-o"]} />
        May 27, 2015 at 3:14am
      </span>
      <p className={styles["be-comment-text"]}>
        Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu mattis,
        at maximus eros commodo. Cras magna nunc, cursus lobortis luctus at,
        sollicitudin vel neque. Duis eleifend lorem non ant. Proin ut ornare
        lectus, vel eleifend est. Fusce hendrerit dui in turpis tristique
        blandit.
      </p>
    </div>
  </div>
  <div className={styles["be-comment"]}>
    <div className={styles["be-img-comment"]}>
      <a href="blog-detail-2.html">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar3.png"
          alt=""
          className={styles["be-ava-comment"]}
        />
      </a>
    </div>
    <div className={styles["be-comment-content"]}>
      <span className={styles["be-comment-name"]}>
        <a href="blog-detail-2.html">Cüneyt ŞEN</a>
      </span>
      <span className={styles["be-comment-time"]}>
        <i className={styles["fa fa-clock-o"]} />
        May 27, 2015 at 3:14am
      </span>
      <p className={styles["be-comment-text"]}>
        Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque.
        Duis eleifend lorem non ant
      </p>
    </div>
  </div>
  <form id={styles["form-comment"]} className={styles["form-block"]}>
    <div className={styles["row"]}>
      <div className={styles["col-xs-12"]}>
        <div className={styles["form-group"]}>
          <textarea
            className={styles["form-input"]}
            required=""
            placeholder="Your text"
            defaultValue={""}
          />
        </div>
      </div>
      <Button type="submit" variant="primary">Submit</Button>{' '}
    </div>
  </form>
</div>

  </div>
</>
    );
}