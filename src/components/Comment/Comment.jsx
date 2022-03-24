import React from "react";
import { StyledComment, StyledReply } from "./Comment.styled";
import CurrentUserComment from "./CurrentUserComment/CurrentUserComment";
import imagesResource from "../../assets/images";
import { StyledFlexContainer } from "../Flex/Flex.styled";
const Comment = ({
  score,
  content,
  toggleModal,
  png,
  username,
  createdAt,
  replies,
  currentUser,
}) => {
  console.log(png);
  console.log(toggleModal);
  return (
    <>
      {replies.length <= 0 ? (
        <StyledComment>
          <div className="comment-button">
            <button className="plus">
              <img src={imagesResource.iconPlus} alt="A plus icon" />
            </button>
            <div className="score">
              <p>{score}</p>
            </div>
            <button className="minus">
              <img src={imagesResource.iconMinus} alt="A minus icon" />
            </button>
          </div>

          <div className="comment-body">
            <div className="comment-user">
              <div className="left-side">
                <div className="avatar">
                  <img src={png} alt="An user avatar" />
                </div>
                <h2>{username}</h2>
                <h3>{createdAt}</h3>
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
        </StyledComment>
      ) : (
        <StyledFlexContainer>
          <StyledComment>
            <div className="comment-button">
              <button className="plus">
                <img src={imagesResource.iconPlus} alt="A plus icon" />
              </button>
              <div className="score">
                <p>{score}</p>
              </div>
              <button className="minus">
                <img src={imagesResource.iconMinus} alt="A minus icon" />
              </button>
            </div>

            <div className="comment-body">
              <div className="comment-user">
                <div className="left-side">
                  <div className="avatar">
                    <img src={png} alt="An user avatar" />
                  </div>
                  <h2>{username}</h2>
                  <h3>{createdAt}</h3>
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
          </StyledComment>
          <StyledReply >
            <div className="decoration-container">
              <div className="decoration"></div>
            </div>
            <div className="replies">
              {replies.map((reply) =>
                currentUser.username !== reply.user.username ? (
                  <StyledComment key={reply.id}>
                    <div className="comment-button">
                      <button className="plus">
                        <img src={imagesResource.iconPlus} alt="A plus icon" />
                      </button>
                      <div className="score">
                        <p>{reply.score}</p>
                      </div>
                      <button className="minus">
                        <img
                          src={imagesResource.iconMinus}
                          alt="A minus icon"
                        />
                      </button>
                    </div>

                    <div className="comment-body">
                      <div className="comment-user">
                        <div className="left-side">
                          <div className="avatar">
                            <img
                              src={reply.user.image.png}
                              alt="An user avatar"
                            />
                          </div>
                          <h2>{reply.user.username}</h2>
                          <h3>{reply.createdAt}</h3>
                        </div>
                        <div className="right-side">
                          <img
                            src={imagesResource.iconReply}
                            alt="A reply icon"
                          />
                          <button>Reply</button>
                        </div>
                      </div>
                      <div className="content">
                        <p><span>@{reply.replyingTo}</span> {reply.content}</p>
                      </div>
                    </div>
                  </StyledComment>
                ) : (
                  <StyledComment key={reply.id}>
                    <div className="comment-button">
                      <button className="plus">
                        <img src={imagesResource.iconPlus} alt="A plus icon" />
                      </button>
                      <div className="score">
                        <p>{reply.score}</p>
                      </div>
                      <button className="minus">
                        <img
                          src={imagesResource.iconMinus}
                          alt="A minus icon"
                        />
                      </button>
                    </div>

                    <div className="comment-body">
                      <div className="comment-user">
                        <div className="left-side">
                          <div className="avatar">
                            <img
                              src={reply.user.image.png}
                              alt="An user avatar"
                            />
                          </div>
                          <h2>{reply.user.username}</h2>
                          <h3 className="comment-owner">you</h3>
                          <h3>{reply.createdAt}</h3>
                        </div>
                        <div className="reply-right-side">
                          <div className="delete-button">
                            <img
                              src={imagesResource.iconDelete}
                              alt="A delete icon"
                            />
                            <button onClick = {() =>toggleModal(true)}>Delete</button>
                          </div>
                          <div className="edit-button">
                            <img
                              src={imagesResource.iconEdit}
                              alt="A edit icon"
                            />
                            <button>Edit</button>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <p> <span>@{reply.replyingTo}</span> {reply.content}</p>
                      </div>
                    </div>
                  </StyledComment>
                )
              )}
            </div>
          </StyledReply>
          <CurrentUserComment png={currentUser.image.png} buttonRole="send" />
        </StyledFlexContainer>
      )}
    </>
  );
};

export default Comment;
