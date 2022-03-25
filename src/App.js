import { StyledGlobal } from "./Global.styled";
import { StyledFlexContainer } from "./components/Flex/Flex.styled";
import Comment from "./components/Comment/Comment.jsx";
import { content } from "./assets/content";
import Modal  from "./components/Comment/Modal/Modal.jsx";
import {useState} from 'react'
import {CommentContext} from './hooks/useContext'

function App() {
  
  const [comments,setComments] = useState(content.comments);
  let replyComment = [];
  comments.forEach(comment => {
    let eachReply = comment.replies;
    replyComment.push(eachReply);
    
  })
  const [reply,setReply] = useState(replyComment[1]);
  console.log(reply);



  const [isToggle, setToggle] = useState(false);
  content.comments.map(comment => {
    console.log(comment.user.image.png);
  })
  return (
    <>
      <StyledGlobal />
      <CommentContext.Provider value = {{comments,setComments}}>
      <StyledFlexContainer>
            {content.comments.map((comment) => (
              <Comment toggleModal = {setToggle}  content = {comment.content} score = {comment.score} createdAt = {comment.createdAt} username = {comment.user.username} png = {comment.user.image.png} replies ={comment.replies} currentUser = {content.currentUser} />
            ))}
      </StyledFlexContainer>
      {isToggle && <Modal toggleModal = {setToggle}/>}
      </CommentContext.Provider>
    </>
  );
}

export default App;
