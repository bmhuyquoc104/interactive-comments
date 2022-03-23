import styled from "styled-components";

export const StyledCurrentUserComment = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  gap:1em;
  border-radius: 10px;
  padding: 1em;
  & > :first-child {
      width:fit-content;
  }
  & > :nth-child(2) {
    flex: 1;
  }

  .avatar img {
    object-fit: cover;
    height: 35px;
  }
  form {
    display: flex;
    gap: 1em;
    align-items: flex-start;
  }
  textarea {
    flex: 1;
    border-radius: 10px;
    border: 1px solid var(--clr_lb);
    color: var(--clr_lb);
    font-weight: 100;
    padding: 0.75em 1.5em;
    line-height:1.5;
    font-family: 'Rubik', sans-serif;
  }

  textarea:focus {
      outline:none;
  }

  button {
    width: 15%;  
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--clr_mblue);
    color:white;
    font-size:clamp(1rem,2.5vw,1rem);
    padding: 0.8em 1em;
    border:none;
  }
`;
