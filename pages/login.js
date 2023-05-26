import React from "react";
import User from "./api/user";
import { useRouter } from "next/router";

import styles from "@/styles/login.module.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import ProTectPath from "@/utils/proTectPath.js";

export default function Login() {
  const router = useRouter();
  const [isLogin, setIslogin] = React.useState(false);
  const [userName, serUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState();
  const [checkRememberMe, setCheckRememberMe] = React.useState(false);
  const [error, setError] = React.useState({
    userName: false,
    password: false,
  });

  const onSubmit = async () => {
    setError({
      userName: userName === "",
      password: password === "",
    });
    if (userName !== "" && password !== "") {
      const check = await User.Login(userName, password);
      if (check.length > 0) {
        setErrorMessage("loginFail");
        setError({
          userName: userName === "",
          password: password === "",
        });
      } else {
        router.push("/");
      }
    }
  };
  const checkLogin = async () => {
    const user = await ProTectPath.CheckLogin();
    setIslogin(user);
  };
  
  React.useEffect(() => {
    checkLogin();
    if (isLogin === true) {
      router.push("/");
    }
  }, [isLogin]);
  return (
    <div id={styles.login}>
      <Grid container spacing={2} rowSpacing={6}>
        <Grid item xs={12} md={12}>
          <div className={styles.div1}>
            <div className={styles.logo}></div>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={4}>
            <Grid item xs={0} md={4} />
            <Grid item xs={12} md={4}>
              <div className={styles.form}>
                <h3>Log In</h3>
                <p>Username</p>
                <TextField
                  style={{ width: "100%" }}
                  onChange={(e) => serUserName(e.target.value)}
                  error={error.userName}
                />
                <p>Password</p>
                <TextField
                  type="password"
                  style={{ width: "100%" }}
                  onChange={(e) => setPassword(e.target.value)}
                  error={error.password}
                />
                <div style={{ lineHeight: "30px", letterSpacing: "0.2px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkRememberMe}
                        onChange={(e) => setCheckRememberMe(!checkRememberMe)}
                      />
                    }
                    label="Remember me"
                  />
                  {errorMessage && (
                    <p style={{ color: "red" }}>**{errorMessage}**</p>
                  )}
                </div>
                <Button
                  variant="contained"
                  className="stanDard"
                  onClick={onSubmit}
                >
                  Log In
                </Button>
                <div className={styles.formRemember}>
                  <p>Don’t have an account?</p>
                  <a href="/register">Sign Up</a>
                </div>
              </div>
            </Grid>
            <Grid item xs={0} md={4} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <div className={styles.div3}>
            <p className={styles.footer}>Copyright 2023 Online Shop</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
