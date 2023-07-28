import styled from "styled-components";

export const Item = styled.li`
margin-bottom: 10px;
font-size: large;
width: 300px;

p {
display: flex;
justify-content: space-between;
align-items: center;
}
span{
  color: ${props => props.color};
    font-weight: 600;
    padding: 5px;
    font-size: x-large;
    display: inline-block;
    min-width: 35px;
    text-align: center;
}
` 

export const Ul = styled.ul`
list-style: none;
` 