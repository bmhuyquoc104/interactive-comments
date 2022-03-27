import React, { useContext } from "react";
import { StyledCurrentUserComment } from "./CurrentUserComment.styled";
import { CommentContext } from "../../../hooks/useContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import nextId from "react-id-generator";
import { format } from "date-fns";
const CurrentUserComment = ({
  png,
  buttonRole,
  currentUser,
  replyingTo,
  replyId,
  commentid,
  type,
}) => {

  // Use useContext to get the comment state and setComment function
  const { comments, setComments } = useContext(CommentContext);

  // Set the schema for the content
  const schema = yup.object().shape({
    content: yup.string().required("Please enter your comment"),
  });

  // Import all objects and function in useForm library
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

  // Function when handleSubmit
  const onSubmit = (data) => {
    // Depend on the type pass from comment to determine which function should be called
    switch (type) {
      // update comment
      case "updateComment":
        //reset after submit form
        reset();
        // find the comment that being chosen and update it by using spread function
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
        //update reply
      case "updateReply":
        reset();
        return setComments(
          // find the correct reply that is being chosen and update it by spread function
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
        // update reply comment
      case "replyComment":
        reset();
        // Initialize new reply comment
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
        // use concat to add new reply to the replies array
        return setComments(
          comments.map((comment) =>
            comment.id === commentid
              ? { ...comment, replies: comment.replies.concat({ ...newReply }) }
              : { ...comment }
          )
        );
        // when no type props pass -> call add new function
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
      {/* render by the buttonRole */}
      {buttonRole === "reply" ? (
        <StyledCurrentUserComment>
          <div className="avatar">
            <img src={png} alt="A user avatar" />
          </div>
          {/* handling form submit */}
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
