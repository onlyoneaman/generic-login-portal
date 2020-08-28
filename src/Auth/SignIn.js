import React, {useState} from "react";
import {Button, Form, Input, Modal} from "antd";
import GetUserDetails from "../Common/ApiCall/GetUserDetails";
import LoginToken from "../Common/ApiCall/LoginToken";
import SendNotification from "../Common/Utils/SendNotification";
import NotificationTypeEnum from "../Common/Models/NotificationTypeEnum";
import SendForgotToken from "../Common/ApiCall/SendForgotToken";

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
        {/*        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>*/}
      </Form>
    </Modal>
  );
};

const SignIn = ({setTab, setUser}) => {
  const [visible, setVisible] = useState(false)

  const onCreate = values => {
    //console.log('Received values of form: ', values);
    SendForgotToken(values.username)
      .then(r => {
        SendNotification('', r.message)
      })
    setVisible(false);
  };

  function onFinish(values) {
    LoginToken(values.username, values.password)
      .then(r => {
        console.log(r)
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
    SendNotification(NotificationTypeEnum.Failure, errorInfo)
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
            <Button
              type="primary"
              onClick={()=>{setVisible(true)}}
            >
              Forgot Password?
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