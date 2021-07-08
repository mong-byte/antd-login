import Login from "./Login";
import Footer from "./Components/Footer";
import styled from "styled-components";
import { flexCenter } from "./style/mixin";

function App() {
  return (
    <LoginWrapper>
      <Login />
      <Footer />
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  ${flexCenter("flex", "space-between", "center")}
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default App;
