import React from "react";
import { StyledComment } from "./Comment.styled";
import imagesResource from "../../assets/images";

const Comment = ({ scrore, user:{username,image:{png}}, createAt, content, message }) => {
  <StyledComment>
    <div className="comment-button">
      <div className="image">
        <img src={imagesResource.iconPlus} alt="A plus icon" />
      </div>
      <div className="score">{scrore}</div>
      <div className="image">
        <img src={imagesResource.iconMinus} alt="A minus icon" />
      </div>
    </div>

    <div className="comment-body">
      <div className="comment-user">
          <div className="left-side">
          <div className="avatar">
              <img src={png} alt="An user avatar" />
              </div>
          <h2>{username}</h2>
          <h3>{createAt}</h3>
          </div>
          <div className="right-side">
              <img src={imagesResource.iconReply} alt="A reply icon" />
              <button>Reply</button>
          </div>
      </div>
      <div className="content">
          <p>{content}</p>
      </div>
    </div>
  </StyledComment>;
};

export default Comment;
