import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useHistory } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

const theme = createTheme();

function Login() {
  let history = useHistory();

  const clientId =
    "159038898278-e0jjvi03qj00u3gaiq9lgfa4teln8h7o.apps.googleusercontent.com";
  const onLoginSuccess = (event) => {
    console.log("Login Success:", event.profileObj);
    history.push("/welcomepage");
  };

  const onLoginFailure = (event) => {
    console.log("Login Failed:", event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    history.push("/welcomepage");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="GoogleButton"
            >
              LogIn
            </Button>
            <GoogleLogin
              className="GoogleButton"
              clientId={clientId}
              buttonText="Login In with Google"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              // isSignedIn={true}
            />
            <FacebookLogin
              appId="1071354816969212"
              autoLoad={true}
              fields="name,email,picture"
              callback={onLoginSuccess}
              width="100%"
              // size="large"
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default Login;
