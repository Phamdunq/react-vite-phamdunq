import { Button, Form, Input, notification } from "antd";
import { registerUserApi } from "../services/api.services";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async(value) => {
    console.log("check value:", value);
    const res = await registerUserApi(
        value.fullName, 
        value.email, 
        value.password, 
        value.phone
    )
    if(res.data) {
        notification.success({
            message: "Register user success",
            description: "thanh cong"
        })
        navigate("/login")
    } else {
        notification.error({
            message: "Register user error",
            description: JSON.stringify(res.message)
        })
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ margin: "50px" }}
      onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="fullName"
        name="fullName"
        rules={[
          {
            required: true,
            message: "Please input your fullName!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="phone Number"
        name="phone"
        rules={[
          {
            required: true,
            pattern: new RegExp(/\d+/g),
            message: "Wrong format!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Button
        type="primary"
        onClick={() => {
          form.submit();
        }}
      >
        Register
      </Button>
      <Button onClick={() => {
        form.setFieldsValue({
            email: "phamdunq@gmail.com",
            fullName: "phamdunq"
        })
      }}>Test</Button>
    </Form>
  );
};

export default RegisterPage;
