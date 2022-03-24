import React, { useState } from "react";
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
  const [isReplyingComment, setReplyingComment] = useState(false);
  const [isUpdating,setUpdating] = useState(false);
  const [isReplyingAReply,setReplyingAReply] = useState(false);
  return (
    <>
      {replies.length <= 0 ? (
        <StyledFlexContainer>
          <StyledComment>
            <div className="comment-button">
              <button className="plus">
                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                </svg>
              </button>
              <div className="score">
                <p>{score}</p>
              </div>
              <button className="minus">
                <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
                </svg>
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
                  <button onClick={() => setReplyingComment(!isReplyingComment)}>
                    Reply
                  </button>
                </div>
              </div>
              <div className="content">
                <p>{content}</p>
              </div>
            </div>
          </StyledComment>
          {isReplyingComment && (
            <CurrentUserComment
              png={currentUser.image.png}
              buttonRole="reply"
            />
          )}
        </StyledFlexContainer>
      ) : (
        <StyledFlexContainer>
          <StyledComment>
            <div className="comment-button">
              <button className="plus">
                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                </svg>{" "}
              </button>
              <div className="score">
                <p>{score}</p>
              </div>
              <button className="minus">
                <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
                </svg>{" "}
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
                  <button
                    onClick={() => {
                      setReplyingComment(!isReplyingComment);
                    }}
                  >
                    Reply
                  </button>
                </div>
              </div>
              <div className="content">
                <p>{content}</p>
              </div>
            </div>
          </StyledComment>

          <StyledReply>
            <div className="decoration-container">
              <div className="decoration"></div>
            </div>
            <div className="replies">
              {replies.map((reply) =>
                currentUser.username !== reply.user.username ? (
                  <StyledFlexContainer key={reply.id}>
                    <StyledComment>
                      <div className="comment-button">
                        <button className="plus">
                          <svg
                            width="11"
                            height="11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                          </svg>{" "}
                        </button>
                        <div className="score">
                          <p>{reply.score}</p>
                        </div>
                        <button className="minus">
                          <svg
                            width="11"
                            height="3"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
                          </svg>
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
                            <button onClick={() => setReplyingAReply(!isReplyingAReply)}>
                              Reply
                            </button>
                          </div>
                        </div>
                        <div className="content">
                          <p>
                            <span>@{reply.replyingTo}</span> {reply.content}
                          </p>
                        </div>
                      </div>
                    </StyledComment>
                    {isReplyingAReply && (
                      <CurrentUserComment
                        png={currentUser.image.png}
                        buttonRole="reply"
                      />
                    )}
                  </StyledFlexContainer>
                ) : (
                  <StyledFlexContainer key={reply.id}>
                    <StyledComment>
                      <div className="comment-button">
                        <button className="plus">
                          <svg
                            width="11"
                            height="11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                          </svg>{" "}
                        </button>
                        <div className="score">
                          <p>{reply.score}</p>
                        </div>
                        <button className="minus">
                          <svg
                            width="11"
                            height="3"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
                          </svg>
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
                              <button onClick={() => toggleModal(true)}>
                                Delete
                              </button>
                            </div>
                            <div className="edit-button">
                              <img
                                src={imagesResource.iconEdit}
                                alt="A edit icon"
                              />
                              <button onClick={() => setUpdating(!isUpdating)}>Edit</button>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <p>
                            {" "}
                            <span>@{reply.replyingTo}</span> {reply.content}
                          </p>
                        </div>
                      </div>
                    </StyledComment>
                   
                    {isUpdating && (
                      <CurrentUserComment
                        png={currentUser.image.png}
                        buttonRole="update"
                      />
                    )}
                  </StyledFlexContainer>
                )
              )}
            </div>
          </StyledReply>
          {isReplyingComment && (
            <CurrentUserComment
              png={currentUser.image.png}
              buttonRole="reply"
            />
          )}
          <CurrentUserComment png={currentUser.image.png} buttonRole="send" />
        </StyledFlexContainer>
      )}
    </>
  );
};

export default Comment;
