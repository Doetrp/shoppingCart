import React from "react";
import styles from "@/styles/detail.module.css";
import Layout from "@/components/Layouts/layout.js";
import Product from "./api/getrProduct";
import User from "./api/user";
import ProTectPath from "@/utils/proTectPath.js";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const productId = parseInt(router.query.productId);
  const [quality, setQuality] = React.useState(0);
  const [productOnweb, setProductOnWeb] = React.useState();

  const getProductInCart = async () => {
    const currentUser = JSON.parse(await ProTectPath.getCurrentUser());
    let productIncart = currentUser.attributes?.information?.product;
    const checkItemInCart =
      productIncart && productIncart.find((e) => e.productId === productId);
    if (checkItemInCart) {
      checkItemInCart.quality = quality;
      productIncart.filter((e) => {
        if (e.productId === productId) {
          e = checkItemInCart;
        } else {
          productIncart.push({
            productId: productId,
            quality: quality,
          });
        }
      });
    } else {
      productIncart
        ? productIncart.push({
            productId: productId,
            quality: quality,
          })
        : (productIncart = [
            {
              productId: productId,
              quality: quality,
            },
          ]);
    }
    const payload = {
      data: {
        information: {
          product: productIncart,
        },
      },
    };
    try {
      const save = await User.addProductIncart(currentUser.id, payload);
      await User.getproductbyid(save);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    const setUser = async () => {
      const currentUser = JSON.parse(await ProTectPath.getCurrentUser());
      const checkQuality = currentUser.attributes?.information?.product.find(
        (e) => e.productId === productId
      );
      checkQuality && setQuality(+checkQuality.quality);
    };
    const fetchProduct = async () => {
      const res = await Product.ProductList(productId);
      setProductOnWeb(res.data[0]);
    };
    fetchProduct();
    setUser();
  }, [productId]);
  return (
    productOnweb && (
      <div id={styles.detail}>
        <Layout>
          <Grid item xs={12} md={12}>
            <div className={styles.parent}>
              <div className={styles.detail}>
                <Grid container spacing={4} rowSpacing={4}>
                  <Grid item xs={12} md={12}>
                    <div className={styles.breadcrumbs}>
                      <a href="/">Home {">"} </a>
                      <p>{router.query.productName}</p>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <img
                      src={`http://localhost:1337${productOnweb.attributes.image.data.attributes.url}`}
                      alt={productOnweb.attributes.image}
                      className={styles.imageProduct}
                    />
                    <img
                      src={`http://localhost:1337${productOnweb.attributes.imageMobile.data.attributes.url}`}
                      alt={productOnweb.attributes.imageMobile}
                      className={styles.imageProductMobile}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className={styles.detailList}>
                      <div className={styles.header}>
                        {productOnweb.attributes.productName}
                      </div>
                      <div className={styles.price}>
                        ${productOnweb.attributes.price}
                      </div>
                      <div className={styles.detailProduct}>
                        {productOnweb.attributes.detail}
                      </div>
                      <div className={styles.quality}>
                        Quantity
                        <div className={styles.buttonGroup}>
                          <Button
                            variant="outlined"
                            disabled={quality === 0}
                            onClick={(e) => setQuality(quality - 1)}
                          >
                            -
                          </Button>
                          <TextField
                            type="number"
                            value={quality}
                            sx={{ width: "70px", textAlign: "center" }}
                            disabled
                          />
                          <Button
                            variant="outlined"
                            onClick={(e) => setQuality(quality + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className={styles.button}>
                        <Button
                          variant="contained"
                          className="stanDard"
                          onClick={getProductInCart}
                          disable={`${quality === 0}`}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>
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
