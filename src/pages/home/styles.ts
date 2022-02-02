import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Popup from 'reactjs-popup';

interface IProps {
  presenca: boolean;
}

export const Container = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  #menu {
    width: 214.5vh;
    
    background-color: #247aff;
    box-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.2);
    padding: 2vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1, h2 {
      font-size: 6vh;
      color: #bad5ff;
      margin-left: 3vw;
      text-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.1);
    }

    h2 {
      font-size: 4vh;
      margin-right: 3vw;
    }

    button {
      margin-right: 3vw;
      padding: 2vh 2vh 2vh 2vh;
      background-color: #69a3ff;
      color: #fff;
      border: 0;
      border-radius: 0.4vh;
      font-size: 3vh;
      box-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: ${shade(0.03, '#69a3ff')};
      }
    }
  }
`;

export const Lista = styled.div`
  width: 80vw;
  margin-top: 4vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #msg {
    font-size: 3vh;
    margin-top: 2vh;
  }
  
  #info {
    width: 100%;
    padding: 1vh 2vh 1vh 2vh;

    background-color: #247aff;
    border-radius: 0.4vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 4vh;
      color: #bad5ff;
      text-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.1);
    }

    p {
      font-size: 4vh;
      color: #bad5ff;
      margin-right: 1vw;
      font-weight: bold;
      text-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.1);
    }

    div {
      button {
        margin-left: 1vw;
        padding: 2vh 2vh 2vh 2vh;
        background-color: #69a3ff;
        color: #fff;
        border: 0;
        border-radius: 0.4vh;
        font-size: 3vh;
        box-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.1);

        &:hover {
          background-color: ${shade(0.03, '#69a3ff')};
        }
      }
    }
  }

  #table {
    width: 100%;
    margin-top: 4vh;

    background-color: #247aff;
    border-radius: 0.4vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    padding: 1vh 2vh 1vh 2vh;

    h1, h2 {
      text-align: center;
      width: 20%;
      font-size: 4vh;
      color: #bad5ff;
      text-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.1);
    }

    h2 {
      width: 13%;
    }
  }  
`;

export const Linha = styled.div<IProps>`
  width: 100%;

  border-radius: 0.4vh;

  /* &:nth-child(2n + 1) {
    background-color: #ebf3ff;
  } */

  border: 0.1vh solid rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  padding: 1vh 2vh 1vh 2vh;

  &:hover {
    background-color: ${shade(0.03, '#deebff')};
  }

  p {
    text-align: center;
    width: 20%;
    font-size: 4vh;
    color: #333;
  }

  button {
    width: 13%;
    background-color: transparent;
    padding: 1vh;
    border-radius: 0.4vh;
    border: 0;
    
    svg {
      color: #247aff;
    }
  }

  .status {
    width: 13%;
    padding: 1vh;
    border: 0;
    font-size: 3vh;
    font-weight: bold;

    &:hover {
      border: 0.1vh solid #ff2b2b;
      background-color: ${shade(0.03, '#d6e6ff')};
    }
  }

  ${props => props.presenca === true && css`
    background-color: #e3ffe6;
    
    &:hover {
      background-color: ${shade(0.03, '#e3ffe6')};
    }

    .status {
      color: #36a820;

      &:hover {
        background-color: #36a820;
        color: #fff;
        border: 0.1vh solid #36a820;
      }
    }
  `}

  ${props => props.presenca === false && css`
    background-color: #ffe6e6;

    &:hover {
      background-color: ${shade(0.03, '#ffe6e6')};
    }

    .status {
      color: #ff2b2b;

      &:hover {
        background-color: #ff2b2b;
        color: #fff;
        border: 0.1vh solid #ff2b2b;
      }
    }
  `}
`;

export const PopupModal = styled(Popup)`
	&-content {
		background: transparent;
		animation: anvil 0.25s;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;