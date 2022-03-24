import { StyledGlobal } from "./Global.styled";
import { StyledFlexContainer } from "./components/Flex/Flex.styled";
import Comment from "./components/Comment/Comment.jsx";
import { content } from "./assets/content";

function App() {
  content.comments.map(comment => {
    console.log(comment.user.image.png);
  })
  return (
    <>
      <StyledGlobal />
      <StyledFlexContainer>
            {content.comments.map((comment) => (
              <Comment  content = {comment.content} score = {comment.score} createdAt = {comment.createdAt} username = {comment.user.username} png = {comment.user.image.png} replies ={comment.replies} currentUser = {content.currentUser} />
            ))}
      </StyledFlexContainer>
    </>
  );
}

export default App;
