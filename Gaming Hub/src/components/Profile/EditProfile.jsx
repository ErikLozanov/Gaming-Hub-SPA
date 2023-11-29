import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";

export default function EditProfile({ show, handleClose, onEditProfile }) {
  const { values, changeHandler, onSubmit, changeValues } = useForm({
    username: "",
    description: "",
    profilePicture: "",
  },onEditProfile);

  useEffect(() => {
    const { username, description, profilePicture } = JSON.parse(sessionStorage.getItem("auth"));
    changeValues({ username, description, profilePicture });
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            value={values.username}
            onChange={changeHandler}
            type="text"
            id="username"
            name="username"
            placeholder="Enter game title..."
          />
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            value={values.profilePicture}
            onChange={changeHandler}
            type="text"
            id="profilePicture"
            name="profilePicture"
          />

          <label htmlFor="description">Description:</label>
          <textarea style={{resize:'none', display:'block', width: '100%'}}
            value={values.description}
            onChange={changeHandler}
            type="text"
            id="description"
            name="description"
            
          />
          <Button type="submit" variant="secondary" onClick={handleClose}>
            Edit Info
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
