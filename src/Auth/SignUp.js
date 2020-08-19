import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import SendNotification from "../Common/Utils/SendNotification";
import NotificationTypeEnum from "../Common/Models/NotificationTypeEnum";
import RegisterUser from "../Common/ApiCall/RegisterUser";

const layout = {
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};

const SignUp = () => {

  const onFinish = values => {
    if(values.password !== values.confirm_password) {
      SendNotification(NotificationTypeEnum.Success, 'Passwords doesn\'t match')
      return
    }
    RegisterUser(values.email, values.token, values.password)
      .then(r => {
        SendNotification(NotificationTypeEnum.Success ,r.message)
      })
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return(
    <Form
      {...layout}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {/*      <Form.Item
        name="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input
          placeholder="Full name"
          type="text"
        />
      </Form.Item>*/}

      <Form.Item
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input
          placeholder="Email"
          type="email"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="confirm_password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          placeholder="Confirm Password"
        />
      </Form.Item>

      <Form.Item
        name="token"
        rules={[
          {
            required: true,
            message: 'Please input the token!',
          },
        ]}
      >
        <Input
          placeholder="Enter ProfileMate Token"
          type="text"
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <div className="align-center">
          <Button size="large" htmlType="submit">
            Sign Up
          </Button>
        </div>
      </Form.Item>
    </Form>
  )
}

export default SignUp