import "./App.css";
import { Container } from "./styles.app.js";
import LoadingBalls from "./Loading Balls/loadingballs.js";

export default function App() {
  return (
    <Container>
      <LoadingBalls ballAmount={3}/>
    </Container>
  );
}
