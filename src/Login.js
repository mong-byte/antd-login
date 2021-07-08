import { Form, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import { useState } from "react";
import AccountLogin from "./Components/AccountLogin";
import PhoneLogin from "./Components/PhoneLogin";
import { flexCenter } from "./style/mixin";

const Login = () => {
  const [tab, setTab] = useState(0);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const changeTab = (name) => {
    if (name === "account") return setTab(0);
    return setTab(1);
  };

  return (
    <LoginContainer>
      <LogoContainer>
        <Logo src="/images/logo.svg" alt="Logo" />
        <LogoTilte>Ant Design</LogoTilte>
      </LogoContainer>
      <TabContainer>
        <TabButton tab={!tab} onClick={() => changeTab("account")}>
          Account Login
        </TabButton>
        <TabButton tab={tab} onClick={() => changeTab("phone")}>
          Phone Login
        </TabButton>
      </TabContainer>
      <LoginForm
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        {tab ? <PhoneLogin /> : <AccountLogin />}
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <LoginButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Submit
          </LoginButton>
        </Form.Item>
      </LoginForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  ${flexCenter("flex", "center", "center")}
  flex-direction: column;
  width: 20%;
  height: 45%;
  margin-top: 50px;
`;

const LogoContainer = styled.div`
  ${flexCenter("flex", "center", "center")}
  width: 100%;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 40px;
`;

const LogoTilte = styled.h1`
  margin: 0px 0px 0px 8%;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 30px;
`;

const TabButton = styled.button`
  all: unset;
  padding: 20px;
  border-bottom: ${(props) => (props.tab ? "3px solid #3FA9FF" : "")};
  cursor: pointer;
`;

const LoginForm = styled(Form)`
  width: 100%;

  .ant-form-item-control-input-content {
    display: flex;
    justify-content: space-between;
  }
`;

const LoginButton = styled(Button)`
  width: 100%;
  height: 40px;
`;

export default Login;
