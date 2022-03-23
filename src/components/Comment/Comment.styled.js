import styled  from 'styled-components'

export const StyledComment = styled.div`
display: flex;
background-color:white;
padding:1.5em;
gap:1em;
width:50%;

&>:first-child{
    width:10%;
    background-color:red;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    padding:0.5em;
}

&>:nth-child(2){
    flex:1;
    display: flex;
    flex-direction:column;
}

.comment-user{
    display: flex;
    width:100%;
    justify-content:space-between;
    align-items: center;
}

.left-side{
    display: flex;
    align-items:center;
    justify-content:space-between;
    gap:1em;
}

.right-side{
    display: flex;

}




`