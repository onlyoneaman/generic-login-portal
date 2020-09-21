import React, {useState} from "react";
import {Button, Divider, Form, Input, Modal, Typography} from "antd";
import LoginToken from "../Common/ApiCall/LoginToken";
import SendNotification from "../Common/Utils/SendNotification";
import NotificationTypeEnum from "../Common/Models/NotificationTypeEnum";
import SendForgotToken from "../Common/ApiCall/SendForgotToken";
import {Link} from "react-router-dom";

const layout = {
  wrapperCol: {
    lg: {
      span: 20,
      offset: 2
    },
    md: {
      span: 24
    }
  },
};
const tailLayout = {
  wrapperCol: {
    lg: {
      span: 20,
      offset: 2
    },
    md: {
      span: 24
    }
  },
};

const {Title} = Typography

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Forgot Password"
      okText="Confirm Email"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: 'Please input your Username',
            },
          ]}
        >
          <Input
            type="email"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const SignIn = ({setUser}) => {
  const [visible, setVisible] = useState(false)

  const onCreate = values => {
    //console.log('Received values of form: ', values);
    SendForgotToken(values.username)
      .then(r => {
        if(r.success) {
          SendNotification(NotificationTypeEnum.Success, r.data.message)
        } else {
          SendNotification(NotificationTypeEnum.Failure, r.errors[0].message)
        }
      })
    setVisible(false);
  };

  function onFinish(values) {
    LoginToken(values.username, values.password)
      .then(r => {
        //console.log(r)
        if(r.success) {
          localStorage.setItem('authToken', r.data.token)
          setUser()
        }
        else {
          SendNotification(NotificationTypeEnum.Failure, 'Bad Credentials')
        }
      })
  }

  const onFinishFailed = errorInfo => {
    //console.log(errorInfo)
  };

  return(
    <div>
      <Form
        {...layout}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!'
              }
            ]}
            noStyle
          >
            <Input
              bordered={false}
              placeholder="Username"
              size="large"
              type="text"
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
                message: 'Please input your password!',
                min: 8
              }
            ]}
          >
            <Input.Password
              placeholder="Password"
              bordered={false}
              size="large"
            />
          </Form.Item>
          <Divider className="black-divider" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <div className="align-center">
            <Button className="dark-button" size="large" type="primary" htmlType="submit">
              LOGIN
            </Button>
          </div>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <div className="align-center">
            <Title level={4}>
              Don't have an Account?
            </Title>
            <Button
              block
              size="large"
              style={{
                background: 'transparent linear-gradient(180deg, #001529 80%, #546270 100%) 0% 0% no-repeat padding-box',
                padding: '2px 15px'
              }}
              type="primary"
            >
              <Link to={'/sign-up'}>
                SIGN UP
              </Link>
            </Button>
          </div>
        </Form.Item>

        <Form.Item>
          <div className="align-center">
            <Button
              type="text"
              onClick={()=>{setVisible(true)}}
            >
              <Title level={4}>
                Forgot Password?
              </Title>
            </Button>
          </div>
        </Form.Item>

      </Form>

      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  )

}

export default SignIn