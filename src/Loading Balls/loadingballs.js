import {
  ContainerForBalls,
  BallAndShadowContainer,
  Ball,
  BallShadow,
} from "./styles.loadingballs.js";

export default function LoadingBalls({ ballAmount }) {
  const balls = new Array(ballAmount || 3).fill({ id: Math.random() });
  return (
    <ContainerForBalls>
      {balls.map((ball, index) => {
        return (
          <BallAndShadowContainer key={ball.id}>
            <Ball index={index} />
            <BallShadow index={index} />
          </BallAndShadowContainer>
        );
      })}
    </ContainerForBalls>
  );
}
