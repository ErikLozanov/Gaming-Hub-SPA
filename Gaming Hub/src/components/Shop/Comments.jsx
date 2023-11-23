import useForm from "../../hooks/useForm";
import styles from "./Comments.module.css"

import { commentServiceFactory } from "../../services/commentService";

import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../partials/Comment";
import { useAuthContext } from "../../contexts/AuthContext";
import formatDate from "../../utils/dateFormatter";



export default function Comments() {
    
    const { id } = useParams();
    const [comments,setComments] = useState([]);
    const commentService = commentServiceFactory();
    const { isAuthenticated } = useAuthContext();
    const {onSubmit,values,changeHandler} = useForm({text:''}, onCommentSubmit);


    useEffect(() => {
        const comments = commentService.getAllForGame(id)
        .then(res => setComments(res))
        .catch((err) => console.log(err.message));
    },[])


    async function onCommentSubmit(values) {
        const userId = sessionStorage.getItem('userId');
        const email = sessionStorage.getItem('email');
        const commentDate = formatDate(new Date());
        console.log(commentDate);
        const newComment = await commentService.create(values.text, id, userId, commentDate);
        const modifiedComment = {...newComment, _ownerId: {_ownerId: newComment._ownerId , email}};
        setComments(state => [...state, modifiedComment]);
        };

    return (
        <>
  <div className="container">
  <div className={styles["be-comment-block"]}>
  <h1 className={styles["comments-title"]}>Comments ({comments.length})</h1>

    {comments.map(comment => <Comment key={comment._id} comment={comment} />)}
    {isAuthenticated ? <form onSubmit={onSubmit} id={styles["form-comment"]} className={styles["form-block"]}>
    <div className={styles["row"]}>
      <div className={styles["col-xs-12"]}>
        <div className={styles["form-group"]}>
          <textarea
            name="text"
            className={styles["form-input"]}
            required={true}
            placeholder="Your text"
            onChange={changeHandler}
            value={values.text}
          />
        </div>
      </div>
      <Button type="submit" variant="primary">Submit</Button>{' '}
    </div>
  </form>  : <p style={{marginTop: "50px"}}>You need to log in to add a comment. </p>}

</div>

  </div>
</>
    );
}