import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from "../Shop/Comments.module.css";

import Dropdown from 'react-bootstrap/Dropdown';

export default function Comment({comment, onEditComment, onDeleteComment, onReportComment}) {

  const { userId } = useAuthContext();
  const isMyProfile = sessionStorage.getItem('userId') === comment._ownerId._id ? '/users/my-profile/' :  `/users/${comment._ownerId._id}/profile`;
  const isOwner = userId === comment._ownerId._id;


    return (
        <div className={styles["be-comment"]}>
        <div className={styles["be-img-comment"]}>
          <Link to={isMyProfile}>
            <img
              src={comment._ownerId.profilePicture}
              alt=""
              className={styles["be-ava-comment"]}
            />
          </Link>
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
        <Dropdown.Item onClick={(e) => onReportComment()}>Report</Dropdown.Item>
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