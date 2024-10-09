import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  notification,
  Row,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../services/api.services";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);


  const onFinish = async (value) => {
    setLoading(true);
    console.log("check value:", value);
    const res = await loginApi(value.email, value.password);
    if (res.data) {
      message.success("Đăng nhập thành công");
      localStorage.setItem("access_token", res.data.access_token);
      setUser(res.data.user)
      navigate("/");
    } else {
      notification.error({
        message: "Login user error",
        description: JSON.stringify(res.message),
      });
    }
    setLoading(false);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ margin: "50px" }}
      onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
    >
      <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "email khong dung dinh dang",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
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
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              loading={loading}
              type="primary"
              onClick={() => {
                form.submit();
              }}
            >
              Login
            </Button>
            <Link to={"/"}>Go to Homepage</Link>
          </div>
          <Divider />
          <div>
            Chưa có tài khoản<Link to={"/register"}>Đăng ký tại đây</Link>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginPage;
