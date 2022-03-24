import React from "react";
import { StyledCurrentUserComment } from "./CurrentUserComment.styled";



const CurrentUserComment = ({ png,buttonRole }) => {
  return (
    <StyledCurrentUserComment>
      <div className="avatar">
        <img src={png} alt="A user avatar" />
      </div>
      <form>
        <textarea cols ="4 0" rows = "3" type="textarea" placeholder="Add a comment..." />
        <button>{buttonRole}</button>
      </form>
    </StyledCurrentUserComment>
  );
};

export default CurrentUserComment;
