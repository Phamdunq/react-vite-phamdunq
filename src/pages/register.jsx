import { Button, Checkbox, Form, Input } from "antd";

const RegisterPage = () => {
  const [form] = Form.useForm();

  const onFinish = (value) => {
    console.log("check value:", value)
  }



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
        // rules={[
        //   {
        //     required: true,
        //     message: "Please input your username!",
        //   },
        // ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        // rules={[
        //   {
        //     required: true,
        //     message: "Please input your username!",
        //   },
        // ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        // rules={[
        //   {
        //     required: true,
        //     message: "Please input your username!",
        //   },
        // ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="phone Number"
        name="phone"
        // rules={[
        //   {
        //     required: true,
        //     message: "Please input your username!",
        //   },
        // ]}
      >
        <Input />
      </Form.Item>


      <Button
        type="primary"
        onClick={() => {
          form.submit()
        }}
      >
        Register
      </Button>
    </Form>
  );
};

export default RegisterPage;
