import styled  from 'styled-components'

export const StyledComment = styled.div`
display: flex;
background-color:white;
padding:1.5em;
gap:1em;
width:100%;
border-radius:10px;

&>:first-child{
    width:5%;
    background-color:var(--clr_lr);
    display: flex;
    border-radius:10px;
    flex-direction:column;
    justify-content:space-around;
    align-items: center;
    height:90px;
}
&>:first-child p{
    color:var(--clr_mblue);
}
&>:nth-child(2){
    flex:1;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    gap:0.25em;
}

.comment-user{
    display: flex;
    width:100%;
    justify-content:space-between;
    align-items: center;
}

.reply-right-side {
    display: flex;
    gap:2em;
}

.reply-right-side >*{
    display: flex;
    gap:0.5em;
    align-items: center;
}

.reply-right-side img{
    object-fit:cover;
    height:15px;
}

.delete-button button{
    color:var(--clr_red);
}

.comment-owner{
    padding:0.1em 0.3em;
    background-color:var(--clr_mblue);
    font-size:clamp(0.7rem,2vw,1rem);
    display: flex;
    align-items: center;
}



p{
    color:var(--clr_lb);
    font-size:clamp(0.7rem,2vw,1rem);
    line-height:1.5;
    width:98%;
}


.avatar img{
    object-fit:cover;
    width:100%;
    height:35px;
}

button{
    background-color:transparent;
    color:var(--clr_mblue);
    font-size:clamp(0.7rem,2vw,1rem);
    border:none;
    font-weight:700;
}

.left-side{
    display: flex;
    align-items:center;
    justify-content:space-between;
    gap:1em;
}

.left-side h2{
    color:var(--clr_db);
    font-size:clamp(0.7rem,2vw,1rem);
}
.left-side h3{
    color:var(--clr_lb);
    font-size:clamp(0.7rem,2vw,1rem);
    font-weight:100;
}

.left-side .comment-owner{
    color:white;
}

.right-side{
    display: flex;
    align-items: center;
    gap:0.5em;
}
`

export const StyledReply = styled.div`
display: flex;
width:100%;

.decoration-container{
    width:30%;
    display: flex;
}

.replies{
    display: flex;
    flex-direction: column;
    gap:1em;
}

.decoration{
    width:50%;
    border-right:1px solid var(--clr_lb);
    opacity:0.1
}

`