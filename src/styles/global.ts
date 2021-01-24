import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  .App {
    height: 100vh;
  }
 
  .App-content {
    background-color: #282c34;
    height: 100%;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: calc(10px + 2vmin);
    color: white;
    padding-top: 50px;
    }

    .square {
    background-color: #34495e;
    }

    .square:nth-child(-n+8):nth-child(even),
    .square:nth-child(n+8):nth-child(-n+16):nth-child(odd),
    .square:nth-child(n+17):nth-child(-n+24):nth-child(even),
    .square:nth-child(n+25):nth-child(-n+32):nth-child(odd),
    .square:nth-child(n+33):nth-child(-n+41):nth-child(even),
    .square:nth-child(n+41):nth-child(-n+48):nth-child(odd),
    .square:nth-child(n+49):nth-child(-n+56):nth-child(even),
    .square:nth-child(n+57):nth-child(-n+64):nth-child(odd)
    {
    background-color: white;
    }
`;
