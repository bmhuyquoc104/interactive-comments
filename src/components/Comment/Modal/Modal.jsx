import React, { useContext } from "react";
import { StyledModal } from "./Modal.styled";
import { StyledAbsoluteContainer } from "../../Flex/Flex.styled";
import { CommentContext } from "../../../hooks/useContext";

const Modal = ({ toggleModal, id, replyId }) => {
  console.log(replyId);
  const { comments, setComments } = useContext(CommentContext);
  const deleteFunction = () => {
    // id && setComments(comments.filter(comment => comment.id !== id));
    setComments(
      comments.map((comment) => ({
        ...comment,
        replies: comment.replies.filter((reply) => reply.id !== replyId),
      }))
    );
    toggleModal(false);
  };
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
          <button onClick={() => toggleModal(false)} className="cancel">
            NO,CANCEL
          </button>
          <button onClick={deleteFunction} className="delete">
            YES, DELETE
          </button>
        </div>
      </StyledModal>
    </StyledAbsoluteContainer>
  );
};

export default Modal;
