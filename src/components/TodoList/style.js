import styled from 'styled-components';

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
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

export const Form = styled.form`
   width: 80%;
   height: 80%;
   border: 1px solid gray;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding: 1rem;
   margin-top: 2rem;
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
   align-items: center;
   position: absolute;
   top: 50%;
   right: 0;
   transform: translateY(-50%);

   & span {
      font-size: 12px;
      margin-left: 5px;
   }
`

export const Input = styled.input`
   width: ${ props => props.width };
   height: 25px;
   border-radius: 3px;
   border: 1px solid gray;
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
   width: 45%;
   height: 100%;
   margin-top: 20px;
   position: relative;
   border: 1px solid gray;
`