import React from 'react';
import NavBar from '../components/NavBar';
import '../App.css';

export default {
  title: 'Ex/Navigation Bar',
  component: NavBar,
  argTypes: { click: { action: alert('Button clicked!') } },
};

const Template = () => <NavBar/>;

export const DefaultNavBar = Template.bind({});
