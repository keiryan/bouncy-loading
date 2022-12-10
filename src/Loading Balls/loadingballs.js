import {
    ContainerForBalls,
    BallAndShadowContainer,
    Ball,
    BallShadow,
  } from "./styles.loadingballs.js";
  
  const newId = () => Math.random();
  
  export default function LoadingBalls({ ballAmount }) {
    const balls = new Array(ballAmount || 3).fill('ball');
    return (
      <ContainerForBalls>
        {balls.map((ball, index) => {
          return (
            <BallAndShadowContainer key={newId()}>
              <Ball index={index} />
              <BallShadow index={index} />
            </BallAndShadowContainer>
          );
        })}
      </ContainerForBalls>
    );
  }
  