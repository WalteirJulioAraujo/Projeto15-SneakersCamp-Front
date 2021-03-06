import {  useEffect, useState } from 'react';
import styled from 'styled-components';


export default function Size({num,setSizeSelect,selected,availabeSizes,checkMaxQuantity,setQtd}){

    const [ select, setSelect ] = useState(false);

    const disabled = !availabeSizes.includes(num);

    function selectSize(e){
        e.stopPropagation();
        if(disabled) return;
        setSelect(!select);
        if(select){
            setQtd(0);
            setSizeSelect(0);
            return;
        }
        setSizeSelect(num);
        setQtd(1);
    }

    checkMaxQuantity();

    return(
        <SizeButton onClick={selectSize} select={select} selected={selected} disabled={disabled} >{num}</SizeButton>
    );
}

const SizeButton = styled.div`
    width: 40px;
    height: 40px;
    border: ${props=>props.select && props.selected ?'4px solid #0B054A':'1px solid #C1B0B0'};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.disabled?'gray':''};

    :hover{
        cursor: pointer;
    }
`

