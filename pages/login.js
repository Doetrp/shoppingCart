import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import styles from "@/styles/login.module.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

export default function Login() {
  const { data: session } = useSession();
  const [userName, serUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checkRememberMe, setCheckRememberMe] = React.useState(false);
  const [error, setError] = React.useState({
    userName: false,
    password: false,
  });

  const onSubmit = () => {
    setError({
      userName: userName === "",
      password: password === "",
    });
    if (userName !== "" && password !== "") {
      console.log("success", checkRememberMe);
      signIn("credentials", { username: userName, password: password });
      console.log(session);
    }
  };
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
                  <a>Sign Up</a>
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
