import React, { useContext } from "react";
import { StyledCurrentUserComment } from "./CurrentUserComment.styled";
import { CommentContext, TypeContext } from "../../../hooks/useContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import nextId from "react-id-generator";
import { format } from "date-fns";
const CurrentUserComment = ({
  png,
  buttonRole,
  currentUser,
  replyId,
  commentID,
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

  console.log(comments);

  console.log(replyId);
  const onSubmit = (data) => {
    // switch (type) {
    //   case "updateComment":
    //     console.log("Here");
    //     reset();
    //     return setComments(
    //       comments.map(
    //         (comment) =>
    //           comment.id === commentID && {
    //             ...comment,
    //             content: data,
    //             createAt: format(new Date(), "dd-MM--yyyy"),
    //           }
    //       )
    //     );
    //   case "updateReply":
    console.log("Here");
    console.log(typeof(data));
    return setComments(
      comments.map((comment) => ({
        ...comment,
        replies: comment.replies.map((reply) =>
          reply.id !== replyId ? { ...reply } : { ...reply, ...data,createdAt:"2 tieng truoc" }
        ),
      })),
    );
    //   default:
    //     let id = nextId("comment-");
    //     let score = 0;
    //     let replies = [];
    //     const today = format(new Date(), "MM-dd-yyyy");
    //     let createdAt = today;
    //     const newComment = {
    //       id,
    //       ...data,
    //       createdAt,
    //       score,
    //       user: currentUser,
    //       replies,
    //     };
    //     setComments([...comments, newComment]);
    //     reset();
    // }
  };
  return (
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
  );
};

export default CurrentUserComment;
