import { useMutation, useQuery } from "@tanstack/react-query";
import * as React from "react";
import { fbLogin } from "../util/http";
import Facebooklogin from 'react-facebook-login';
import config from '../config.json';


const Dashboard = () => {

    const {mutate: login} = useMutation({mutationFn: fbLogin})
   
    const facebookResponse = (response) => {
        console.log(response)
        login({access_token: response.accessToken});
    };

    
    return (
        <>
            <div>Dashboard</div>
            {/* <button onClick={onFbClickHandler}>Facebook login</button> */}
            <Facebooklogin
                appId={config.FACEBOOK_APP_ID}
                autoLoad={false}
                callback={facebookResponse} />
        </>
    );
}

export default Dashboard;