import { StyledGlobal } from "./Global.styled";
import { StyledFlexContainer } from "./components/Flex/Flex.styled";
import Comment from "./components/Comment/Comment.jsx";
import { content } from "./assets/content";
import Modal  from "./components/Comment/Modal/Modal.jsx";
import {useState} from 'react'
import {CommentContext} from './hooks/useContext'
import CurrentUserComment from "./components/Comment/CurrentUserComment/CurrentUserComment";
import imagesResource from './assets/images'
function App() {
  
  const [comments,setComments] = useState(content.comments);
  let replyComment = [];
  comments.forEach(comment => {
    let eachReply = comment.replies;
    replyComment.push(eachReply);
    
  })
  const [reply,setReply] = useState(replyComment[1]);
  console.log(comments);
  const newComment = {
    id: 1,
    content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "1 month ago",
    score: 12,
    user: {
      image: { 
        png: `${imagesResource.imageAmy}`,
      },
      username: "amyrobson"
    },
    replies: []
  }


  const [isToggle, setToggle] = useState(false);
  content.comments.map(comment => {
    console.log(comment.user.image.png);
  })
  return (
    <>
      <StyledGlobal />
      <CommentContext.Provider value = {{comments,setComments}}>
      <StyledFlexContainer>
            {comments.map((comment) => (
              <Comment toggleModal = {setToggle}  content = {comment.content} score = {comment.score} createdAt = {comment.createdAt} username = {comment.user.username} png = {comment.user.image.png} replies ={comment.replies} currentUser = {content.currentUser} />
            ))}
            <CurrentUserComment
        currentUser={content.currentUser}
        png={content.currentUser.image.png}
        buttonRole="send"
      />
      </StyledFlexContainer>
      {isToggle && <Modal toggleModal = {setToggle}/>}
      </CommentContext.Provider>
    </>
  );
}

export default App;
