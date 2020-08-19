import React from "react";
import {Button, Form, Input} from "antd";
import GetUserDetails from "../Common/ApiCall/GetUserDetails";
import LoginToken from "../Common/ApiCall/LoginToken";
import SendNotification from "../Common/Utils/SendNotification";
import NotificationTypeEnum from "../Common/Models/NotificationTypeEnum";

const layout = {
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 24
  },
};

const SignIn = ({setTab, setUser}) => {

  function onFinish(values) {
    LoginToken(values.username, values.password)
      .then(r => {
        if(r.token) {
          localStorage.setItem('authToken', r.token)
          setUser()
        }
        else {
          SendNotification(NotificationTypeEnum.Failure, 'Bad Credentials')
        }
      })
  }

  const onFinishFailed = errorInfo => {
    SendNotification(NotificationTypeEnum.Failure, errorInfo)
  };

  return(
    <Form
      {...layout}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!'
          }
        ]}
      >
        <Input
          placeholder="Username"
          type="text"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
      >
        <Input.Password
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item {...tailLayout} >
        <div className="align-center">
          <Button className="dark-button" size="large" type="primary" htmlType="submit">
            LOGIN
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button size="large" onClick={()=>setTab(0)}>
            SIGN UP
          </Button>
        </div>
      </Form.Item>

      <Form.Item>
        <div className="align-center">
          Forgot Password?
        </div>
      </Form.Item>
    </Form>
  )

}

export default SignIn