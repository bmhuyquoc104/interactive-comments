import styled from 'styled-components'

export const StyledModal = styled.div`
display: flex;
flex-direction:column;
width:max(30%,450px);
padding:1.5em 1.75em;
background-color:white;
gap:1.5em;
border-radius:10px;
.modal-title{
    color:var(--clr_db);
    opacity:0.8;
    font-weight:400;
    font-size:clamp(1rem,2.5vw,1.1rem);
}

.modal-content{
    color:var(--clr_lb);
    opacity:0.7;
    line-height:1.5;
    width:90%;
    font-size:clamp(1rem,2.5vw,1rem);
}

.modal-button{
    display: flex;
    align-items:center;
    gap:1em;
}

.modal-button >*{
    width:100%;
    padding:1em;
    text-align:center;
    text-transform: uppercase;
    font-size:clamp(1rem,3.5vw,1.2rem);
    color:var(--clr_w);
    border:none;
    border-radius:10px;
}

.delete{
    background-color:var(--clr_red);
}

.modal-button .cancel{
    background-color:var(--clr_lb);
}

@media (max-width:480px){
    width:max(90%,350px);

}

`