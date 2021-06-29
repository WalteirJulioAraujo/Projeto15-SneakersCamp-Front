import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled.div`
    font-family: 'Creepster', cursive;
    font-size: 64px;
    margin-top: 80px;
    text-align: center;
`;


export const InputFields = styled.div`
    width: 85%;
    margin: 26px auto 0 auto;
    input {
        height: 58px;
        width: 100%;
        color: #000;
        font-size: 20px;
        margin-top: 13px;
        border-radius: 5px;
        border: none;
        padding-left: 32px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
        
    }   
    input[type=number] {
    -moz-appearance: textfield;
    }
`;

export const SubmitButton = styled.button`
    height: 46px;
    width: 100%;
    margin: 13px auto 0 auto;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    display: block;
    border: none;
    background-color: #a328d6;
    :hover{
        cursor: pointer;
    }
`;

export const RedirectLink = styled(Link)`
    font-size: 16px;
    text-align: center;
    display: block;
    width: fit-content;
    margin: 10px auto 0 auto;
`