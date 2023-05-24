import React from "react";
import styles from "@/styles/detail.module.css";
import Layout from "@/components/Layouts/layout.js";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Detail() {
  const router = useRouter();
  const productId = parseInt(router.query.productId);
  const [quality, setQuality] = React.useState(0);
  const [productOnweb, setProductOnWeb] = React.useState();
  const product = [
    {
      productId: 0,
      image: "/image/product/product-image.png",
      imageMobile: "/image/product/product-image (8).png",
      productName: "Men's Plain Derby Semi Casual Shoes",
      categories: "Men's Plain Derby Semi Casual Shoes",
      price: "6,400.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 1,
      image: "/image/product/product-image (1).png",
      imageMobile: "/image/product/product-image (9).png",
      productName: "Men’s Sports Walking Shoes",
      categories: "Men’s Sports Walking Shoes",
      price: "6,700.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 2,
      image: "/image/product/product-image (2).png",
      imageMobile: "/image/product/product-image (10).png",
      productName: "Men's Cosk Walking,Gym Shoes",
      categories: "Men's Cosk Walking,Gym Shoes",
      price: "6,600.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 3,
      image: "/image/product/product-image (3).png",
      imageMobile: "/image/product/product-image (11).png",
      productName: "Men'sports Walking & Gym Shoes",
      categories: "Men'sports Walking & Gym Shoes",
      price: "6,500.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 4,
      image: "/image/product/product-image (4).png",
      imageMobile: "/image/product/product-image (12).png",
      productName: "Men's OXYFIT (N) Walking Shoe",
      categories: "Men's OXYFIT (N) Walking Shoe",
      price: "6,400.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 5,
      image: "/image/product/product-image (5).png",
      imageMobile: "/image/product/product-image (13).png",
      productName: "Men's 3392 Stylish Casual Shoes",
      categories: "Men's 3392 Stylish Casual Shoes",
      price: "6,300.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 6,
      image: "/image/product/product-image (6).png",
      imageMobile: "/image/product/product-image (14).png",
      productName: "Men's Milan Best Running Shoes",
      categories: "Men's Milan Best Running Shoes",
      price: "6,200.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 7,
      image: "/image/product/product-image (7).png",
      imageMobile: "/image/product/product-image (15).png",
      productName: "Men's Creta-12 Men's Running Shoes",
      categories: "Men's Creta-12 Men's Running Shoes",
      price: "6,100.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
  ];
  React.useEffect(() => {
    const setProduct = product.filter((e) => e.productId === productId);
    setProductOnWeb(setProduct[0]);
  });
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
                      src={productOnweb.image}
                      alt={productOnweb.image}
                      className={styles.imageProduct}
                    />
                    <img
                      src={productOnweb.imageMobile}
                      alt={productOnweb.imageMobile}
                      className={styles.imageProductMobile}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className={styles.detailList}>
                      <div className={styles.header}>
                        {productOnweb.productName}
                      </div>
                      <div className={styles.price}>${productOnweb.price}</div>
                      <div className={styles.detailProduct}>
                        {productOnweb.detail}
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
                          //   onClick={onSubmit}
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
