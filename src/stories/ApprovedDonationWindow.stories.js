import React from "react";
import ApprovedDonationWindow from "../components/ApprovedDonationPageComponents/ApprovedDonationWindow";
import { withRouter } from 'storybook-addon-react-router-v6';
import '../App.css';

export default {
    title: 'Ex/Approved Donation Window',
    component: ApprovedDonationWindow,
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: '/',
        }
    }
};

const Template = () => {
    <ApprovedDonationWindow
        id = {"fundraiserId"}
        title={"fundraiserTitle"}
        description={"fundraiserDescription"}
        createdDate={"12/12/2020"}
        plannedEndDate={"12/30/2020"}
    />
};

export const DefaultApprovedDonationWindow = Template.bind({});