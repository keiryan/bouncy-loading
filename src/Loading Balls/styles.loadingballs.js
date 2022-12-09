import styled from "styled-components";
import { Base } from "../styles.app";

export const ContainerForBalls = styled(Base)``;

export const BallAndShadowContainer = styled(Base)`
  flex-direction: column;
  align-items: center;
`;

export const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: pink;
  animation: bounce 0.5s infinite alternate;
  animation-delay: ${(props) => props.index * 0.2}s;
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
    }
  }
`;

export const BallShadow = styled.div`
  width: 8px;
  height: 4px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0px 5px;
  animation: shadow 0.5s infinite alternate;
  animation-delay: ${(props) => props.index * 0.2}s;
  @keyframes shadow {
    0% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0);
    }
  }
`;
