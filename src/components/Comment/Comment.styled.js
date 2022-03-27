import styled  from 'styled-components'

export const StyledComment = styled.div`
display: flex;
background-color:white;
padding:1.5em;
gap:1em;
border-radius:10px;
width:100%;
&>:first-child{
    width:6%;
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


span{
    color:var(--clr_mblue);
    font-weight: 500;
}

.comment-user{
    display: flex;
    width:100%;
    justify-content:space-between;
    align-items: center;
}

.reply-right-side {
    display: flex;
    gap:1em;

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
    cursor: pointer;

}

svg{
    fill:#C5C6EF;
}

.plus:hover, .minus:hover{
    svg{
        fill: var(--clr_mblue);
    }
}


.comment-owner{
    padding:0.2em 0.4em;
    background-color:var(--clr_mblue);
    display: flex;
    font-size:clamp(0.7rem,2vw,0.8rem) !important;
    align-items: center;
}



p{
    color:var(--clr_lb);
    font-size:clamp(0.7rem,2vw,1rem);
    line-height:1.5;
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
    cursor: pointer;

}

.reply-right-side>*:hover,.right-side:hover{
    opacity:0.6;
}

.left-side{
    display: flex;
    align-items:center;
    justify-content:space-between;
    gap:1em;
}

.left-side h2{
    color:var(--clr_db);
    font-weight:500;
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

@media (max-width:720px) {
    flex-direction:column;
    position:relative;
    &>:first-child{
        order:2;
    }
    &>:nth-child(2){
        order:1;
    }

    .comment-button{
        flex-direction: row;
        height:30px;
        width:35%;
        align-items: center;
    }

    .minus{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left-side{
        width:100%;
    }
    .right-side,.reply-right-side{
        position:absolute;
        bottom:2.1em;
        right:1em;
    }

}

@media (max-width: 480px){
    .left-side{
        justify-content:initial;
        gap:1em;
    }

    .reply-right-side{
        justify-content:initial;
        gap:0.5em;
    }
}
`

export const StyledReply = styled.div`
display: flex;
width: 100%;

.decoration-container{
    display: flex;
    width:10%;
}

.replies{
    display: flex;
    flex-direction: column;
    flex:1;
    gap:1em;
}

.decoration{
    width:50%;
    border-right:1px solid var(--clr_lb);
    opacity:0.1
}

@media (max-width: 720px){
    width:max(100%,300px);
    .decoration-container{
        width:5%;
    }
    .replies{
        flex:1;
    }
}

`
