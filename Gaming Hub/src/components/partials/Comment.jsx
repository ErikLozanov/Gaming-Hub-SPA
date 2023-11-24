import styles from "../Shop/Comments.module.css";

import Dropdown from 'react-bootstrap/Dropdown';

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
            <div id={styles["comment-dropdown"]} >
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
            <i className={styles["fa fa-clock-o"]} />
            {comment.commentDate}
          </span>
          <p className={styles["be-comment-text"]}>{comment.text}</p>
        </div>
      </div>
    );
}