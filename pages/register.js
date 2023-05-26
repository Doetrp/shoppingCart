import React from "react";
import { useRouter } from "next/router";

import User from "./api/user";
import Cookies from "js-cookie";

import styles from "@/styles/login.module.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

export default function Register() {
  const router = useRouter();

  const [userName, serUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
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
    if (userName !== "" && password !== "" && checkRememberMe !== false) {
      try {
        await User.register(userName, password);
        router.push("/login");
      } catch (e) {
        console.log("error", e);
      }
    } else if (userName === "" || password === "") {
      console.log(
        "fail",
        `${userName === "" ? "no userName" : ""}, ${
          password === "" ? "no password" : ""
        }`
      );
    } else if (checkRememberMe === false) {
      console.log(
        "fail",
        `${checkRememberMe === false && "please check agree "}`
      );
    }
  };

  return (
    <div id={styles.register}>
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
                <h3>Sign Up</h3>
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
                    label={
                      <div className={styles.checkboxLabelRegister}>
                        <p>I agree to </p>
                        <a>Terms of Use </a>
                        <p>and </p>
                        <a>Privacy Policy </a>
                      </div>
                    }
                  />
                </div>
                <Button
                  variant="contained"
                  className="stanDard"
                  onClick={onSubmit}
                >
                  Sign Up
                </Button>
                <div className={styles.formRemember}>
                  <p>Already have an account?</p>
                  <a href="/login">Log In</a>
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
