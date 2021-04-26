import React, {useState} from "react";
import {Button, Form, Input, Typography, Divider, message} from "antd";
import SendNotification from "../Common/Utils/SendNotification";
import NotificationTypeEnum from "../Common/Models/NotificationTypeEnum";
import RegisterUser from "../Common/ApiCall/RegisterUser";
import Sleep from "../Common/Utils/Sleep";
import {Link, Redirect} from "react-router-dom";

const {Title} = Typography

const layout = {
  wrapperCol: {
    lg: {
      span: 20,
      offset: 2
    }
  },
};
const tailLayout = {
  wrapperCol: {
    ld: {
      span: 20,
      offset: 2
    },
    md: {
      span: 24
    }
  },
};


const SignUp = () => {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const onFinish = values => {
    if(values.password !== values.confirm_password) {
      SendNotification(NotificationTypeEnum.Success, 'Passwords doesn\'t match')
      return
    }
    setLoading(true)
    RegisterUser(values.email, values.password)
      .then(r => {
        setLoading(false)
        if(r.success) {
          message.success(r.data.message)
          Sleep(3000)
            .then(()=>{
              setSuccess(true)
            })
        } else {
          let error ='Registration Failed'
          if(r.errors[0].message) {
            error = r.errors[0].message
          }
          message.error(error)
        }
      })
    // console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if(success) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    )
  }

  return(
    <Form
      {...layout}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

      <Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
          noStyle
        >
          <Input
            size="large"
            bordered={false}
            placeholder="Email"
            type="email"
          />
        </Form.Item>
        <Divider className="black-divider" />
      </Form.Item>

      <Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              min: 8
            },
          ]}
          noStyle
        >
          <Input.Password
            bordered={false}
            placeholder="Password"
            size="large"
          />
        </Form.Item>
        <Divider className="black-divider" />
      </Form.Item>

      <Form.Item>
        <Form.Item
          name="confirm_password"
          rules={[
            {
              required: true,
              min: 8,
            },
          ]}
          noStyle
        >
          <Input.Password
            size="large"
            bordered={false}
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Divider className="black-divider" />
      </Form.Item>

      <br />

      <Form.Item {...tailLayout}>
        <div className="align-center">
          <Button
            size="large"
            htmlType="submit"
            type="primary"
            loading={loading}
            disabled={loading}
          >
            Sign Up
          </Button>
        </div>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <div className="align-center">
          <Button
            size="large"
            htmlType="submit"
          >
            <Link to={'/'}>
              Already Registered? Sign In
            </Link>
          </Button>
        </div>
      </Form.Item>
    </Form>
  )
}

export default SignUp