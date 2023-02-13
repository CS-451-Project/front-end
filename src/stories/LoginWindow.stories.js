import React from "react";
import LoginWindow from "../components/LoginWindow";
import '../App.css';

export default {
  title: 'Ex/Login Window',
  component: LoginWindow,
};

const Template = () => <LoginWindow/>;

export const DefaultLoginWindow = Template.bind({});