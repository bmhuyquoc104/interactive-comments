import React, { useContext } from "react";
import { StyledCurrentUserComment } from "./CurrentUserComment.styled";
import { CommentContext } from "../../../hooks/useContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const CurrentUserComment = ({ png, buttonRole, currentUser }) => {
  const { comments, setComments } = useContext(CommentContext);
  console.log(currentUser);
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

  const onSubmit = (data) => {
    console.log(data);
    const newComment = {...currentUser,...data};
    console.log(newComment);

    reset();
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
