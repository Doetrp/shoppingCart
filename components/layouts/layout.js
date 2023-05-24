import React from "react";
import styles from "@/styles/layout.module.css";

import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div id={styles.layout}>
      <Grid container spacing={2} rowSpacing={6}>
        <Grid item xs={12} md={12}>
          <div className={styles.div1}>
            <div className={styles.logo}></div>
            <div className={styles.iconGroup}>
              <div
                className={styles.shopingCardIcon}
                onClick={() => router.push("/cart")}
              ></div>
              <div className={styles.personIcon}></div>
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
