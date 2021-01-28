import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-size:13px;
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #999;
        border-radius:5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #555;
        border-radius:5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #666;
    }

    @media(max-width:1200px){
        font-size:12px
    }
}


body{
    background:#1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x:hidden;
}

button{
    font-weight:bold;
    font-size:1.1rem;
    cursor:pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background:#23d997;
        color:white;
    }
}

h2{
    font-weight: bold;
    font-size: 4rem;
}

h3{
    color: white;
}

h4{
    font-weight: bold;
    font-size: 2rem
}

a{
    font-size: 1.1.rem;
}

span {
    font-weight: bold;
    color: #23d997;
    font-size:4rem
}

p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}


`;

export default GlobalStyle;
