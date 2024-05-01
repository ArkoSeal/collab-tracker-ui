import { useMutation } from "@tanstack/react-query";
import { fbLogin } from "../../util/http";
import config from '../../config.json';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from '../../providers/auth-context.provider';


const LoginWithFacebook = (props) => {
    const {mutate: login} = useMutation({mutationFn: fbLogin});
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const onFacebookLoginSuccess = (res) => {
        authCtx.login(res.userInfo.facebookProvider.fbId, res.jwt, res);
        navigate('/collab');
    }
   
    const facebookResponse = (response) => {
        login({access_token: response.accessToken}, {
            onSuccess: onFacebookLoginSuccess,
            onError: (e) => { console.log('err',e)}
        });
        
    };

    return (
        <FacebookLogin
            appId={config.FACEBOOK_APP_ID}
            autoLoad={false}
            callback={facebookResponse}
            cssClass="my-facebook-button-class"
            render={renderProps => (
            <Button variant="contained" color="primary" onClick={renderProps.onClick}>Start now</Button>
            )} 
        />
    )
}
export default LoginWithFacebook;