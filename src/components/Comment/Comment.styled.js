import styled  from 'styled-components'

export const StyledComment = styled.div`
display: flex;
background-color:white;
padding:1.5em;
gap:1em;


&>:first-child{
    width:10%;
    background-color:var(--clr__lb);
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

&>:nth-child(2){
    flex:1;
    display: flex;
    flex-direction:column;
    background-color:red;
}




`