import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/layout.module.css";
import ProTectPath from "@/utils/proTectPath.js";

import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Layout({ children }) {
  const router = useRouter();
  const [isLogin, setIslogin] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cart, setCart] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const checkCarth = async () => {
    const currentUser = JSON.parse(await ProTectPath.getCurrentUser());
    const productIncart = currentUser.attributes.information.product;
    setCart(productIncart.length);
  };
  const checkLogin = async () => {
    const user = await ProTectPath.CheckLogin();
    setIslogin(user);
  };

  const logOut = async () => {
    ProTectPath.LogOut();
    setIslogin(undefined);
  };

  React.useEffect(() => {
    checkLogin();
    if (isLogin === false) {
      router.push("/login");
    } else {
      checkCarth();
    }
  }, [isLogin]);
  return (
    <div id={styles.layout}>
      <Grid container spacing={2} rowSpacing={6}>
        <Grid item xs={12} md={12}>
          <div className={styles.div1}>
            <div className={styles.logo}></div>
            <div className={styles.iconGroup}>
              <Badge badgeContent={cart} color="primary">
                <div
                  className={styles.shopingCardIcon}
                  onClick={() => router.push("/cart")}
                ></div>
              </Badge>
              <div
                className={styles.personIcon}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onMouseEnter={handleClick}
              >
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => logOut()}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </Grid>
        {children}
        <Grid item xs={12} md={12}>
          <div className={styles.div3}>
            <p className={styles.footer}>Copyright 2023 Online Shop</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
