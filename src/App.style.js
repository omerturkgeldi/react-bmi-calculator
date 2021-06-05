import styled from "styled-components";

export const Button = styled.button`
  min-height: 100%;
  min-width: 100%;
  padding: 15px 30px;
  background-color: ${(props) => props.backgroundColor};
  color: #130900;
  font-weight: bold;
  border-radius: 10px;
  font-size: larger;
  &:hover {
    mix-blend-mode: difference;
  }
`;
