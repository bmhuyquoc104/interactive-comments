import React from "react";
import {StyledModal} from "./Modal.styled";
import { StyledAbsoluteContainer } from "../../Flex/Flex.styled";
const Modal = ({toggleModal}) => {
    console.log(toggleModal);
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
          <button className="delete">YES, DELETE</button>
        </div>
      </StyledModal>
    </StyledAbsoluteContainer>
  );
};

export default Modal;
