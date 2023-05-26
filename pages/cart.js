import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/cart.module.css";
import Layout from "@/components/Layouts/layout.js";
import Product from "./api/getrProduct";
import User from "./api/user";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ProTectPath from "@/utils/proTectPath.js";

export default function Cart() {
  const router = useRouter();
  const [userId, setUserId] = React.useState();
  const [showCart, setShowCart] = React.useState();
  const [total, setTotal] = React.useState(0);
  const [subtotal, setSubtotal] = React.useState(0);
  const [item, setItem] = React.useState([]);

  const onSubmit = async () => {
    const payload = {
      data: {
        userId: userId,
        product: item,
        subtotal: subtotal,
        total: total,
        delivery: item.length * 100,
      },
    };
    const clearCart = {
      data: {
        information: {
          product: [],
        },
      },
    };
    try {
      await User.addOrder(payload);
      await User.addProductIncart(userId, clearCart);
      await User.getproductbyid(userId);
      router.push("/success");
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (index, value) => {
    console.log(value);

    const clone = [...item];
    clone[index].quality = value;
    setItem(clone);
  };
  React.useEffect(() => {
    const setUser = async () => {
      const currentUser = JSON.parse(await ProTectPath.getCurrentUser());
      setUserId(currentUser.id);
      const productIncart = currentUser.attributes.information.product;
      const form = productIncart;
      setItem(form);
      console.log(form);
      const res = await Product.ProductListCart(productIncart);
      setShowCart(res.data);
      let setPrice = 0;
      res.data.map((e) => {
        productIncart.filter((list) => {
          if (e.id === list.productId) {
            setPrice += e.attributes.price * parseInt(list.quality);
          }
        });
      });
      setSubtotal(setPrice);
      setTotal(setPrice + res.data.length * 100);
    };
    setUser();
  }, []);
  return (
    showCart &&
    item && (
      <div id={styles.cart}>
        <Layout>
          <Grid item xs={12} md={12}>
            <div className={styles.parent}>
              <div className={styles.detail}>
                <Grid container spacing={4} rowSpacing={4}>
                  <Grid item xs={12} md={8}>
                    <Grid item xs={12} md={8} component="p">
                      Cart
                    </Grid>
                    {item.length !== 0 &&
                      showCart.map((e, index) => (
                        <div key={e.attributes.id}>
                          <Grid container spacing={4} rowSpacing={4}>
                            <Grid item xs={6} md={3}>
                              <img
                                src={`http://localhost:1337${e.attributes.image.data.attributes.url}`}
                                alt={e.attributes.image.data.attributes.url}
                                className={styles.imageProduct}
                              />
                              <img
                                src={`http://localhost:1337${e.attributes.imageMobile.data.attributes.url}`}
                                alt={
                                  e.attributes.imageMobile.data.attributes.url
                                }
                                className={styles.imageProductMobile}
                              />
                            </Grid>
                            <Grid item xs={6} md={9}>
                              <div className={styles.detailList}>
                                <Grid item xs={12} md={10}>
                                  <p>{e.attributes.productName}</p>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                  <p>
                                    ฿
                                    {parseInt(e.attributes.price) *
                                      item[index].quality}
                                  </p>
                                </Grid>
                              </div>
                              <div className={styles.qualityList}>
                                <Grid item xs={12} md={2}>
                                  <p>Quantity</p>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                  <div className={styles.buttonGroup}>
                                    <Button
                                      variant="outlined"
                                      disabled={item[index].quality === 0}
                                      onClick={(e) =>
                                        handleChange(
                                          index,
                                          parseInt(item[index].quality) - 1
                                        )
                                      }
                                    >
                                      -
                                    </Button>
                                    <TextField
                                      type="number"
                                      value={item[index].quality}
                                      size="small"
                                      sx={{
                                        width: "70px",
                                        textAlign: "center",
                                        margin: "0px 10px 0px 10px",
                                      }}
                                      disabled
                                    />
                                    <Button
                                      variant="outlined"
                                      onClick={(e) =>
                                        handleChange(
                                          index,
                                          parseInt(item[index].quality) + 1
                                        )
                                      }
                                    >
                                      +
                                    </Button>
                                  </div>
                                </Grid>
                                <Grid item xs={12} md={1}>
                                  <div className={styles.trashIcon} />
                                </Grid>
                              </div>
                            </Grid>
                          </Grid>
                          <hr />
                        </div>
                      ))}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Grid item xs={12} md={8} component="p">
                      Summary
                    </Grid>
                    <div className={styles.summarySubtotal}>
                      <p>Subtotal</p>
                      <p>฿{subtotal}</p>
                    </div>
                    <div className={styles.summaryEstimated}>
                      <p>Estimated Delivery</p>
                      <p>฿{item.length * 100}</p>
                    </div>
                    <hr />
                    <div className={styles.summaryTotal}>
                      <p>Total</p>
                      <p>฿{total}</p>
                    </div>
                    <Button
                      variant="contained"
                      className="stanDard"
                      onClick={onSubmit}
                    >
                      Checkout
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Layout>
      </div>
    )
  );
}
