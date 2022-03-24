import { StyledGlobal } from "./Global.styled";
import { StyledFlexContainer } from "./components/Flex/Flex.styled";
import Comment from "./components/Comment/Comment.jsx";
import { content } from "./assets/content";
import Modal  from "./components/Comment/Modal/Modal.jsx";
import {useState} from 'react'


function App() {

  const [isToggle, setToggle] = useState(false);
  content.comments.map(comment => {
    console.log(comment.user.image.png);
  })
  return (
    <>
      <StyledGlobal />
      <StyledFlexContainer>
            {content.comments.map((comment) => (
              <Comment toggleModal = {setToggle}  content = {comment.content} score = {comment.score} createdAt = {comment.createdAt} username = {comment.user.username} png = {comment.user.image.png} replies ={comment.replies} currentUser = {content.currentUser} />
            ))}
      </StyledFlexContainer>
      {isToggle && <Modal toggleModal = {setToggle}/>}
    </>
  );
}

export default App;
