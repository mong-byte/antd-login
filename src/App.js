import Login from "./Login";
import styled from "styled-components";
import { flexCenter } from "./style/mixin";

const Footer = () => {
  return (
    <FooterContainer>
      <span>Ant Design Pro</span>
      <GithubIcon src="/images/github-logo.svg" alt="github-icon" />
      <span>Ant Design</span>
    </FooterContainer>
  );
};

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

const FooterContainer = styled.div`
  ${flexCenter("flex", "center", "center")}
  width: 100%;
  margin-bottom: 40px;
`;

const GithubIcon = styled.img`
  height: 15px;
  width: 15px;
  margin: 0px 20px;
`;

export default App;
