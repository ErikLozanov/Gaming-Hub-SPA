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
    const [onEdit, setOnEdit] = useState(false);
    const [comments,setComments] = useState([]);
    const [commentId, setCommentId] = useState('');
    const commentService = commentServiceFactory();
    const { isAuthenticated } = useAuthContext();
    const {onSubmit,values,changeHandler,changeValues} = useForm({text:''}, onEdit ? onEditCommentSubmit : onCommentSubmit);

    useEffect(() => {
        const comments = commentService.getAllForGame(id)
        .then(res => setComments(res))
        .catch((err) => console.log(err.message));
    },[])

  async function onCommentSubmit(values) {
        const auth = JSON.parse(sessionStorage.getItem('auth'));
        const commentDate = formatDate(new Date());
        const newComment = await commentService.create(values.text, id, auth._id, commentDate);
        const modifiedComment = {...newComment, _ownerId: {_id: newComment._ownerId , email: auth.email, username: auth.username, profilePicture: auth.profilePicture}};
        setComments(state => [...state, modifiedComment]);
    };

  function onEditComment(e, comment) {
      setOnEdit(true);
      changeValues(comment);
      setCommentId(comment._id)
    };

  async function onEditCommentSubmit () {
    const commentDate = formatDate(new Date());
    const auth = JSON.parse(sessionStorage.getItem('auth'));
    const editComment = await commentService.edit(values.text, id, commentId, commentDate);
    const modifiedComment = {...editComment, _ownerId: {_id: editComment._ownerId , email: auth.email, username: auth.username, profilePicture: auth.profilePicture}};
    setComments(state => state.map(comment => comment._id === modifiedComment._id ? modifiedComment : comment));
    setOnEdit(false);
    };

  async function onDeleteComment (e, comment) {
    const deletedComment = await commentService.delComment(id, comment._id);
    setComments((state) => state.filter(comment => comment._id !== deletedComment._id));
    };

    return (
        <>
  <div className="container">
  <div className={styles["be-comment-block"]}>
  <h1 className={styles["comments-title"]}>Comments ({comments.length})</h1>
    {(comments.length == 0 && isAuthenticated) && (<p>There are no comments on this game. Be the first one to leave a comment!</p>)}
    {comments.map(comment => <Comment key={comment._id} onDeleteComment={onDeleteComment} onEditComment={onEditComment} comment={comment} />)}
    
    {isAuthenticated ? (onEdit ? 
      (<form onSubmit={onSubmit} id={styles["form-comment"]} className={styles["form-block"]}>
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
      <Button type="submit" variant="primary">Edit</Button>{' '}
    </div>
  </form>) : 
  
  (<form onSubmit={onSubmit} id={styles["form-comment"]} className={styles["form-block"]}>
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
  </form>))  : <p style={{marginTop: "50px"}}>You need to log in to add a comment. </p>}

</div>

  </div>
</>
    );
}