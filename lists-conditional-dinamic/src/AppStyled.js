import Styled from "styled-components";

export const ButtonStyled = Styled.button`
      width: 130px;
      height: 30px;
      background-color: ${(props) => (props.on ? "#f50" : "#0f0")};
      color: #333;
      transition: all 0.2s;
      border: none;
       &:hover {
        background-color: ${(props) => (props.on ? "#c70900" : "#090")};
        cursor: pointer;
        outline: 2px solid darkslategrey;
        outline-offset: 2px;
        width: 150px;
      }

      &:focus {
          outline: none;
      }
    `;
