import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
`

export const Header = styled.div`
   width: 100%;
   padding: 1rem 0;
   display: flex;
   justify-content: center;
   background-color: #a9bfea;
`

export const Title = styled.h1`
   width: 80%;
   font-size: 1.3rem;
`

// tá dando bug usando form
export const Form = styled.div`
   width: 80%;
   height: 500px;
   border: 1px solid #f6f6f6;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding: 1rem;
   margin-top: 2rem;
   overflow: scroll;
`

export const HeaderContent = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   position: relative;
`

export const CheckContent = styled.div`
   width: 14%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   position: absolute;
   top: 50%;
   right: 0;
   transform: translateY(-50%);

   & span {
      font-size: 12px;
      margin-left: 5px;
   }

   & div {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`

export const Input = styled.input`
   width: ${ props => props.width };
   height: 25px;
   border-radius: 3px;
   outline: none;
   padding-left: 5px;
`

export const Button = styled.button`

`
export const Add = styled.img`
   width: 25px;
   height: 25px;
   margin-left: 5px;
   cursor: pointer;

   &:hover {
      filter: invert(42%) sepia(13%) saturate(2831%) hue-rotate(72deg) brightness(98%) contrast(92%);
   }
`

export const ItemsContent = styled.ul`
   width: 80%;
   height: 100%;
   margin-top: 3rem;
   position: relative;
`