# Project Problem

## 1. Save data to local Storage
- Use the state hook to get all the data (if exist) in the local storage else initialize as a default array
  
```js
const [comments,setComments] = useState(() => {
    const localData = localStorage.getItem('comments');
    return localData ? JSON.parse(localData) : content.comments;
})
```
- Use the `useEffect` hook to initially set the item to localStorage and only re run if the item arr `changed`

```js
useEffect(() => {
    localStorage.setItem('comments',JSON.stringify(comments))
},[comments])
```

## 2. Upvote and Downvote function
- Use the `useReducer` hook
- Initiale the state for plus and minus status to determine whenever it is active or not 
- In the switch case in `reducer function`, can render the state by `tenary function`

 ```js
    case "UPVOTEPLUS":
        return {
          currentVote: state.currentVote + 1,
          isPlusActive: state.isMinusActive ? false : true,
          isMinusActive: false,
        };
 ```    

 ## 3. Add function
 - Use the `react-hook-form` to collect the input data from user
- Use `react-id-generator` for generate new id
- Use `date-fns` for dealing with date problem 

- To install :
```js
npm i react-hook-form
npm i yup
npm i @hookform/resolvers
npm i react-id-generator
npm i date-fns
```

- To import :

```js
import * as yup from'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hook/resolvers/yup'
import nextId from "react-id-generator";
import { formatDistanceToNow, parseISO,format,getSeconds } from 'date-fns'
``` 

- to add new data to the comments arr, use `spread operator`

```js
setComments([...comments,newComments])
```

## 4. Delete function 
- Use `filter` method for this task. Filter the comment or reply that have the different id compare to the chosen id by user 
```js
setComment(comments.filter(comment => comment.id !=== id));
setReply(comments.map((comment) => ({...comment,replies:comment.reply.filter((reply) => reply.id !== replyId),)}));
``` 
- Set the type props to check whether the delete function is used for comment or reply

## 5. Update function
- Use `map` method for this task. Map each comment or reply that have the same id to update using the `spread operator`

```js
const updateReply = {};
setComments(comments.map((comment) => ({
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
          })))
```

```js
const updateComment = {};
setComments(comments.map((comment) =>
            comment.id === commentid
              ? {
                  ...comment,
                  ...data,
                  createAt: format(new Date(), "dd-MM--yyyy"),
                }
              : { ...comment }
          ))
```

## 6. Add reply
- Similar to add comments, but need to `map` the correct comment to add the new reply by `concat` method
  
```js
const newReply = {};
setComments(
          comments.map((comment) =>
            comment.id === commentid
              ? { ...comment, replies: comment.replies.concat({ ...newReply }) }
              : { ...comment }
          )
        );
```

## 7. Toggle child component
- To prevent toggle all children in the component when using normal `useState` to toggle, add the default object {isOpen:true,id:0} to the useState
- In the tenary render, using the condition to check both the toggle isOpen and its `id` match the `chosenId`
  
```js
const [isUpdatingAReply,setUpdatingAReply] = useState({isOpen:false,id:0});

<button
onClick={() => {
setUpdatingAReply({isOpen:!isUpdatingAReply.isOpen,id:reply.id});
/>

{(isUpdatingAReply.isOpen && isUpdatingAReply.id === reply.id) && (
<CurrentUserComment
png={currentUser.image.png}
buttonRole="update"
replyId={replyID}
type={type}
/>
)}
```
