import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import styled from "styled-components";

const PhoneLogin = () => {
  return (
    <>
      <Form.Item
        name="phonenumber"
        rules={[{ required: true, message: "Please enter mobile number" }]}
      >
        <Input
          prefix={<PhoneOutlined className="site-form-item-icon" />}
          placeholder="Phone Number"
        />
      </Form.Item>
      <CodeInputBox>
        <Form.Item
          name="Mail"
          rules={[{ required: true, message: "Please enter Capcha!" }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Varification Code"
          />
        </Form.Item>
        <CodeButton>Get Code</CodeButton>
      </CodeInputBox>
    </>
  );
};

const CodeInputBox = styled.div`
  display: flex;

  .ant-row {
    width: 100%;
  }
`;

const CodeButton = styled(Button)`
  margin-left: 15px;
`;

export default PhoneLogin;
