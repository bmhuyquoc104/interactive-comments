import React, { useContext,useState } from "react";
import { StyledCurrentUserComment } from "./CurrentUserComment.styled";
import { CommentContext, TypeContext } from "../../../hooks/useContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import nextId from "react-id-generator";
import { format } from "date-fns";
import imagesResource from "../../../assets/images";
const CurrentUserComment = ({
  png,
  buttonRole,
  currentUser,
  replyingTo,
  replyId,
  commentid,
  type,
}) => {

  const { comments, setComments } = useContext(CommentContext);
  const schema = yup.object().shape({
    content: yup.string().required("Please enter your comment"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      content: "",
    },
  });

  console.log(commentid);


  const onSubmit = (data) => {
    switch (type) {
      case "updateComment":
        reset();
        return setComments(
          comments.map((comment) =>
            comment.id === commentid
              ? {
                  ...comment,
                  ...data,
                  createAt: format(new Date(), "dd-MM--yyyy"),
                }
              : { ...comment }
          )
        );
      case "updateReply":
        reset();
        return setComments(
          comments.map((comment) => ({
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id !== replyId
                ? { ...reply }
                : {
                    ...reply,
                    ...data,
                    createdAt: format(new Date(), "dd-MM--yyyy"),
                  }
            ),
          }))
        );
      case "replyComment":
        reset();
        const [user] = comments.filter((comment) => comment.id === commentid);
        const {
          user: { username },
        } = user;
        console.log(currentUser);
        const replyToday = format(new Date(), "MM-dd-yyyy");
        let replyCreatedAt = replyToday;
        let newReplyId = nextId("reply-");
        let newReply = {
          id: `${newReplyId}`,
          ...data,
          createdAt: `${replyCreatedAt}`,
          score: 0,
          replyingTo: `${replyingTo}`,
          user: currentUser,
        };
        return setComments(
          comments.map((comment) =>
            comment.id === commentid
              ? { ...comment, replies: comment.replies.concat({ ...newReply }) }
              : { ...comment }
          )
        );
      case "replyReply":
      default:
        let id = nextId("comment-");
        let score = 0;
        let replies = [];
        const today = format(new Date(), "MM-dd-yyyy");
        let createdAt = today;
        const newComment = {
          id,
          ...data,
          createdAt,
          score,
          user: currentUser,
          replies,
        };
        setComments([...comments, newComment]);
        reset();
    }
  };
  return (
    <>
      {buttonRole === "reply" ? (
        <StyledCurrentUserComment>
          <div className="avatar">
            <img src={png} alt="A user avatar" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              cols="4 0"
              rows="3"
              type="textarea" 
              placeholder={`@${replyingTo}`}
              {...register("content")}
            />
            
            <p className="error">{errors.content?.message}</p>

            <button>{buttonRole}</button>
          </form>
        </StyledCurrentUserComment>
      ) : (
        <StyledCurrentUserComment>
          <div className="avatar">
            <img src={png} alt="A user avatar" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              cols="4 0"
              rows="3"
              type="textarea"
              placeholder="Add a comment..."
              {...register("content")}
            />
            <p className="error">{errors.content?.message}</p>

            <button>{buttonRole}</button>
          </form>
        </StyledCurrentUserComment>
      )}
    </>
  );
};

export default CurrentUserComment;
