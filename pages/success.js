import React from "react";
import { useRouter } from "next/router";

import styles from "@/styles/success.module.css";
import Layout from "@/components/Layouts/layout.js";

import Button from "@mui/material/Button";

export default function Cart() {
  const router = useRouter();

  return (
    <div id={styles.success}>
      <Layout>
        <div className={styles.parent}>
          <div className={styles.detail}>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className={styles.successIcon} />
            </div>
            <p>Thank you for your purchase</p>
            <a>your order number is 1234556970</a>
            <div style={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                className="stanDard"
                onClick={() => router.push("/")}
              >
                Continue shopping
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
