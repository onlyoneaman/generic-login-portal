import React, {useEffect, useState} from "react";
import {Redirect, useHistory, useRouteMatch} from "react-router";
import UserLogWrapper from "../Components/UserLogWrapper";
import {Button, Col, Divider, Form, Input, Row, Typography} from "antd";
import ContentWrapper from "../Components/ContentWrapper";
import ValidateForgotToken from "../Common/ApiCall/ValidateForgotToken";
import SendNotification from "../Common/Utils/SendNotification";
import NotificationTypeEnum from "../Common/Models/NotificationTypeEnum";
import SetNewPassword from "../Common/ApiCall/SetNewPassword";

const {Title} = Typography

const ForgotPassword = () => {
  const [valid, setValid] = useState(false)
  const [token, setToken] = useState(null)

  const match = useRouteMatch('/validate/:id')

  function ValidateToken() {
    setToken(match.params.id)
    if(match.params.id) {
      ValidateForgotToken(match.params.id)
        .then(r => {
          //SendNotification('', 'Valid Token')
          setValid(r.token_validity)
          if(!r.token_validity) {
            SendNotification(NotificationTypeEnum.Failure, "Invalid Token")
          }
        })
    } else {
      SendNotification(NotificationTypeEnum.Failure, "Invalid Token")
    }
  }

  const onFinish = values => {
    if(values.password !== values.confirm_password) {
      SendNotification(NotificationTypeEnum.Success, 'Passwords doesn\'t match')
      return
    }
    SetNewPassword(token, values.password)
      .then(r => {
        SendNotification(NotificationTypeEnum.Success ,r.message)
      })
  };

  const onFinishFailed = errorInfo => {
    SendNotification(NotificationTypeEnum.Failure, errorInfo);
  };

  useEffect(()=>ValidateToken(), [])

  return(
    <UserLogWrapper>

      <Row align="center">

        <Col md={{span: 16}} >
          <ContentWrapper style={{height: '80%'}}>

            <Title>
              Set New Password
            </Title>

            <Divider />

            {valid ? (
              <Form
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
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

                <Form.Item>
                  <div className="align-center">
                    <Button size="large" htmlType="submit">
                      Set Password
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            ) : (
              <p>
                Token Invalid
              </p>
            )}

          </ContentWrapper>
        </Col>
      </Row>
    </UserLogWrapper>
  )
}

export default ForgotPassword