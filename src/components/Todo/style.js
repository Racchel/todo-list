import styled from 'styled-components';

export const Item = styled.li`
   width: 100%;
   height: 2.5rem;
   display: flex;
   align-items: center;
   text-align: center;
   padding: 0 10px;
   margin-bottom: 10px;
   border: 1px solid gray;
`

export const ButtonContent = styled.div`
   position: absolute;
   right: 10px;
`

export const Button = styled.button`
   background-color: ${props => props.bgColor? props.bgColor : 'none'};
   border: none;
   border-radius: 3px;
   padding: 0.5rem;
   color: #fff;
   margin-left: 5px;
`