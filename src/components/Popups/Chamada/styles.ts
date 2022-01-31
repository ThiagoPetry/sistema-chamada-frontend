import styled from "styled-components";
import { shade } from 'polished';

import Close from '../../../assets/close.svg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0vw 0vw 10vw 100vw rgba(0, 0, 0, 0.5);
    border-radius: 0.8vh;
    overflow: hidden;
    overflow-x: hidden;
`;

export const PopUp = styled.div`
    width: 20vw;
    height: 55vh;
    background: #fff;
    border-radius: 0.8vh;

    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; 

    button {
        padding: 1vh;
        background-color: #247aff;
        border: 0;
        border-radius: 0.4vh;
        color: #fff;
        font-size: 3vh;
        margin-right: 1vw;

        &:hover {
            background-color: ${shade(0.03, '#247aff')};
        }
    }

    #enviar {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 10vh;
    }
`;

export const Scroll = styled.div`
    width: 20vw;
    height: 55vh;
    //min-height: 55vh;
    max-height: 55vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        background-color: rgb(196, 196, 196, 0.5);
        width: 0.5vw;
    }
        
    ::-webkit-scrollbar-thumb {
        background-color: rgb(196, 196, 196); 
        border-radius: 1vh;
    }

    #lista {
        background-color: #deebff;

        &:nth-child(2n + 1) {
            background-color: #ebf3ff;
        }

        &:hover {
            background-color: ${shade(0.03, '#deebff')};
        }
    }

    #enviar {
        justify-content: center;
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 2vh;

       p {
            width: 100%;
            font-size: 3vh;
            color: #333;
            margin-left: 2vw;
        }

        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 15vw;
        }

        input {
            width: 100%;
            height: 4vh;
            background-color: transparent;
            border: 0;
            margin-left: 2vw;
            border-radius: 0.4vh;
            padding: 0.2vh;
            font-size: 3vh;
            cursor: pointer;
        }
    }
`;

export const Title = styled.div`
    width: 40vw;
    padding: 1vh;
    background: #247aff;

    display: flex;
    flex-direction: row;

    h1 {
        color: #fff;
        font-size: 4vh;
        margin-left: 0.5vw;
    }

    span {
        background-image: url(${Close});
        border: 0;
        background-color: transparent;
        width: 4vh;
        height: 4vh;
        margin-top: 0.5vh;
        margin-left: 17vw;
        position: absolute;
        background-size: cover;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }

        &:active {
            opacity: 0.8;
        }
    }
`;