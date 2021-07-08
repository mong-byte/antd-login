import { Form, Input } from "antd";
import "antd/dist/antd.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const AccountLogin = () => {
  return (
    <>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please enter username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username: admin or user"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password: ant.design"
        />
      </Form.Item>
    </>
  );
};

export default AccountLogin;
