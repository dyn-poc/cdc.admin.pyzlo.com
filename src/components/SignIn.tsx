import React from "react";
import {RouteComponentProps, useNavigate} from "@reach/router"

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import makeStyles from '@mui/styles/makeStyles';
import Container from "@mui/material/Container";
import {useForm} from "react-hook-form";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useSelector} from "@xstate/react";
import {AuthService} from "../machines/authMachine";
import {ErrorOutlined} from "@mui/icons-material";
import { Checkbox, MenuItem, Select } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: theme.spacing(1)
    },
    paperRow: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: theme.spacing(1)
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
}));

export interface SignInProps extends RouteComponentProps {
    authService: AuthService;
}

const loginServiceSelector = (state: any) => state.context;
export default function SignIn({authService}: SignInProps) {
    const classes = useStyles();
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues:{
            authFlow: "redirect",
            useChildContext: false,
            redirectURL: `${window.location.origin}#/profile`
        }
    });
    const {message} = useSelector(authService, loginServiceSelector);

    // const {loginService} = useSelector(authService, loginServiceSelector);
    const loginService = authService;
 

    const handleSSo = async (data: any) => {
        loginService.send({type: 'SOCIAL' ,provider: "oidc-consoledev",  ...data});
    };

    const handleGoogleLogin = () => {
        loginService.send({type: 'SOCIAL', provider: "google"});
    };
    return (
        <Container component="main" maxWidth="md">

        <Container  maxWidth="xs">
            <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form
                        className={classes.form} 
                        onSubmit={handleSubmit(handleSSo)}
                    >  
                        <Select
                            variant="outlined" 
                            required
                            fullWidth
                            label="authFlow"
                            type="authFlow"
                            id="authFlow"
                            defaultValue={"redirect"}
                            autoComplete="authFlow"
                            {...register("authFlow", {required: true})}
                        >
                            <MenuItem key={"redirect"} value={"redirect"}>{"redirect"}</MenuItem>
                            <MenuItem key={"popup"} value={"popup"}>{"popup"}</MenuItem>
                        </Select>
                        {errors && errors.authFlow && <span>Please enter a authFlow</span>}
                        <TextField
                            variant="outlined"
                            margin="normal" 
                            fullWidth
                            id="redirectURL"
                            label="redirect URL"
                            autoComplete="redirectURL"
                            autoFocus
                            {...register("redirectURL" )}
                        />
                        {errors && errors.redirectURL && <span>Please enter a valid redirect URL</span>}


                        <Checkbox 
                            aria-label={"useChildContext"}
                            id="useChildContext"
                            autoFocus
                            {...register("useChildContext" )}
                        />
 
                        {message &&  <span><ErrorOutlined /> {message}</span>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In With SSO
                        </Button>

                        <Button
                            startIcon={<TwitterIcon/>}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In With IFrame
                        </Button>

                    
                    </form>


                </div>

            <Button
                startIcon={<TwitterIcon/>}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleGoogleLogin}
            >
                Sign In With Google
            </Button>

            <form
                action="https://login.cdc.admin.pyzlo.com/socialize.login" target="loginIframe" method="get"
                className={classes.form}
            >
                <Select
                    variant="outlined"
                    required
                    fullWidth
                    label="authFlow"
                    type="authFlow"
                    id="authFlow"
                    defaultValue={"redirect"}
                    autoComplete="authFlow"
                    {...register("authFlow", {required: true})}
                >
                    <MenuItem key={"redirect"} value={"redirect"}>{"redirect"}</MenuItem>
                    <MenuItem key={"popup"} value={"popup"}>{"popup"}</MenuItem>
                </Select>
                {errors && errors.authFlow && <span>Please enter a authFlow</span>}
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="redirectURL"
                    label="redirect URL"
                    autoComplete="redirectURL"
                    autoFocus
                    {...register("redirectURL" )}
                />
                {errors && errors.redirectURL && <span>Please enter a valid redirect URL</span>}


                <input type="text" name="authMode" value="cookie"></input>
                <input type="text" name="authFlow" value="redirect"></input>
                <input type="text" name="response_type" value="server_token" ></input>
                <input type="text" name="provider" value="oidc-consoledev" ></input>
                <input type="text" name="x_enabledProviders" value="oidc-consoledev" ></input>
                <input type="text" name="redirect_uri" value="/AfterLogin.aspx" ></input>
                <input type="text" name="client_id" value="4_qIcTAyHP_B9dqBgvCutZxA" ></input>
                <input type="text" name="x_sdk" value="js_latest" ></input>
                <input type="text" name="targetEnv" value="jssdk"  ></input>
                <input type="text" name="apiDomain" value="login.cdc.admin.pyzlo.com" ></input>
                <input type="text" name="x_include" value="all" ></input>


                <input type="text" name="state" value="state=domain%3Dhttps%253A%252F%252Fcdc.admin.pyzlo.com%252F%26lid%3Dflid1700721292814%26messaging%3D1%26id%3Dsocialize_login_17007214517641700721451764%26sourceURL%3Dhttps%253A%252F%252Fcdc.admin.pyzlo.com%252F%26redirectURL%3Dhttps%253A%252F%252Fcdc.admin.pyzlo.com%253Fgig_events%253Dsocialize.login%2523%252Fprofile%26addUserInfo%3Dtrue" />

                {message &&  <span><ErrorOutlined /> {message}</span>}
            
                <Button
                    startIcon={<TwitterIcon/>}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In With IFrame
                </Button>


            </form> 
        </Container>
            <Container  maxWidth="xl"> 
                <iframe name="loginIframe" style={{width: "100%", height: "100%", border: "none"}}>
                </iframe>
            </Container>
        </Container>    
    );
}
