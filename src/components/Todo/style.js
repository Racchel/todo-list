import styled from 'styled-components';

export const Item = styled.li`
   width: 100%;
   min-height: 2.5rem;
   display: flex;
   align-items: center;
   padding: 2px 10px;
   margin-bottom: 10px;
   border: 1px solid gray;

   & p {
      width: 60%;
      overflow-wrap: break-word;
      text-align: left;
      font-size: 12px;
   }
`

export const ButtonContent = styled.div`
   position: absolute;
   right: 10px;
`

export const Button = styled.button`
   width: ${props => props.width? props.width : ''};
   background-color: ${props => props.bgColor? props.bgColor : 'none'};
   border: none;
   border-radius: 3px;
   padding: 0.5rem;
   color: #fff;
   margin-left: 5px;
`