import React, {useState, useEffect} from 'react';
import {  useParams } from "react-router-dom";

const Dashboard = () => {
    const {userId} = useParams();
    return (
        <div>
            USERID:---
            {userId}
        </div>
    )
}

export default Dashboard
