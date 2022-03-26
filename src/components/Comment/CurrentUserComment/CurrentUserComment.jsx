import React, { useContext } from "react";
import { StyledCurrentUserComment } from "./CurrentUserComment.styled";
import { CommentContext } from "../../../hooks/useContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import nextId from "react-id-generator";
import imagesResource from "../../../assets/images";
import { formatDistanceToNow, parseISO,format,getSeconds } from 'date-fns'

const CurrentUserComment = ({ png, buttonRole, currentUser }) => {
  const { comments, setComments } = useContext(CommentContext);
  const schema = yup.object().shape({
    content: yup.string().required("Please enter your comment"),
  });
  console.log(comments);

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
    let id = nextId("comment-");
    let score = 0;
    let replies = [];
    const today = format(new Date(), "MM-dd-yyyy");
    let createdAt = today;
    const newComment = {id,...data,createdAt,score,user:currentUser,replies};
    
  
    setComments([...comments, newComment]);
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
