import React from "react";
import DonateWindow from "../components/DonationPageComponents/DonateWindow";
import { withRouter } from 'storybook-addon-react-router-v6';
import '../App.css';

export default {
    title: 'Ex/Donation Window',
    component: DonateWindow,
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: '/',
        }
    }
};

const Template = () => <DonateWindow/>;

export const DefaultDonationWindow = Template.bind({});
