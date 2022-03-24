import styled from "styled-components";

export const StyledCurrentUserComment = styled.div`
  display: flex;
  background-color: white;
  width: max(100%,300px);
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
    flex: 5;
    border-radius: 10px;
    color: var(--clr_lb);
    border: 1px solid rgba(211,211,211,0.75);
    font-weight: 100;
    padding: 0.75em 1.5em;
    line-height:1.5;
    font-family: 'Rubik', sans-serif;
  }

  textarea:focus {
      outline:none;
      border: 1px solid var(--clr_lb);

  }

  button {
    flex:1;
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--clr_mblue);
    color:white;
    font-size:clamp(1rem,2.5vw,1rem);
    padding: 1em 1.5em;
    border:none;
  }

  button:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: max(100%,300px);
    flex-direction: column;
    flex-wrap:wrap;
    position: relative;
    

    form{
      order:1;
      width: 100%;
      flex-direction: column;
      flex-wrap:wrap;
    }

    textarea{
      width: 100%;
    }

    button{
      position: absolute;
      right: 1em;
      bottom: 0.5em;
    }

    &> :first-child {
      order:2;
    }
  }
`;
