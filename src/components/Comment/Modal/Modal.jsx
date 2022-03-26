import React, {useContext} from "react";
import {StyledModal} from "./Modal.styled";
import { StyledAbsoluteContainer } from "../../Flex/Flex.styled";
import { CommentContext } from "../../../hooks/useContext";

const Modal = ({toggleModal,id}) => {
    console.log(id)
    const { comments, setComments } = useContext(CommentContext);
    const deleteFunction = () => {
        setComments(comments.filter(comment => comment.id !== id));
        toggleModal(false);
    }
  return (
    <StyledAbsoluteContainer>
      <StyledModal>
        <div className="modal-title">
          <h2>Delete comment</h2>
        </div>
        <div className="modal-content">
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
        </div>
        <div className="modal-button">
          <button onClick = {() => toggleModal(false)} className="cancel">NO,CANCEL</button>
          <button onClick = { deleteFunction} className="delete">YES, DELETE</button>
        </div>
      </StyledModal>
    </StyledAbsoluteContainer>
  );
};

export default Modal;
