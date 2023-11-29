import { useAuthContext } from "../../contexts/AuthContext";
import styles from "../Shop/Comments.module.css";

import Dropdown from 'react-bootstrap/Dropdown';

export default function Comment({comment, onEditComment, onDeleteComment}) {

  const { userId } = useAuthContext();

  const isOwner = userId === comment._ownerId._id;
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
            <a href="blog-detail-2.html">{comment._ownerId.username}</a>
          </span>
          <span className={styles["be-comment-time"]}>
            <div id={styles["comment-dropdown"]} >
          <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {isOwner ? (
          <>
        <Dropdown.Item onClick={(e) => onEditComment(e, comment)} >Edit</Dropdown.Item>
        <Dropdown.Item onClick={(e) => onDeleteComment(e, comment)}>Delete</Dropdown.Item> 
          </>) : (
        <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
        )}

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