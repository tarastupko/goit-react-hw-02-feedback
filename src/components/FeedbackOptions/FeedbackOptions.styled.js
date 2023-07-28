import styled from "styled-components";

export const List = styled.ul`
  display:flex;
  gap: 15px;
  list-style:none;
  `


export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  box-shadow: 1px 1px 4px black;
  background-color: ${props => props.color};
  transform: scale(1);
  transition: transform 0.1s ease-out;
  font-weight: 400;
  &:hover {
  transform: scale(1.05);
  box-shadow: 1px 1px 5px black;
}
&:active {
  transform: scale(1.1);
  box-shadow: 1px 1px 7px black;
}
  `