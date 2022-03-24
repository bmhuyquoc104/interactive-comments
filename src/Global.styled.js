import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *,*::after,*::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --clr_mblue:hsl(238, 40%, 52%);
        --clr_red:hsl(358, 79%, 66%);
        --clr_gb:hsl(239, 57%, 85%);
        --clr_pr:hsl(357, 100%, 86%);
        --clr_db:hsl(212, 24%, 26%);
        --clr_lb:hsl(211, 10%, 45%);
        --clr_lr:hsl(223, 19%, 93%);
        --clr_vlr:hsl(228, 33%, 97%);
        --clr_w:hsl(0, 0%, 100%);
    }

    body{
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        font-family: 'Rubik', sans-serif;
        background-color: var(--clr_lr);
    }

    #root{
        width:max(45%,650px);
    }

    @media (max-width:720px){
        #root{
            width:max(90%,300px);
        }
    }
`