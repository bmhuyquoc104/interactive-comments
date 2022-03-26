import React, { useContext } from "react";
import { StyledModal } from "./Modal.styled";
import { StyledAbsoluteContainer } from "../../Flex/Flex.styled";
import { CommentContext } from "../../../hooks/useContext";

const Modal = ({ toggleModal, id, replyId, type }) => {
  console.log(replyId);
  const { comments, setComments } = useContext(CommentContext);

  // Function to delete a comment or a reply by current user 
  const deleteFunction = () => {
    // Close modal after delete function completed
    toggleModal(false);

    // Use the type to determine whether the comment or a reply should be deleted
    switch (type) {
      case "deleteReply": 
      // For each comment, find the comment that have the same reply ID that is chosen and then filter out that reply
         return setComments(
      comments.map((comment) => ({
        ...comment,
        replies: comment.replies.filter((reply) => reply.id !== replyId),
      }))
    );
    // For each comment, find the comment that have the same ID that is chosen and then filter out that comment
      case "deleteComment":{
        return (
          setComments(comments.filter((comment) => comment.id !== id))
        );
      }  
      default:
        return;
    }
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
