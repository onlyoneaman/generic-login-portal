import React from "react";
import NotificationTypeEnum from "../Models/NotificationTypeEnum";
import {notification} from "antd";
import {SmileOutlined, FrownOutlined} from "@ant-design/icons";

function SendNotification(title, message, isLong=false) {
    let icon;
    if (title === NotificationTypeEnum.Failure) {
        icon = <FrownOutlined/>;
    } else {
        icon = <SmileOutlined/>;
    }
     let duration = 5;
    if (isLong) {
        duration = 20;
    }
    notification.open({
        message: "",
        description: message,
        icon: icon,
        duration: duration
    });
}

export default SendNotification;