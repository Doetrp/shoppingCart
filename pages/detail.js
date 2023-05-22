import React from "react";
import styles from "@/styles/detail.module.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Detail() {
  const [quality, setQuality] = React.useState(0);
  const testproduct = {
    productId: 0,
    image: "/image/product/product-image.png",
    imageMobile: "/image/product/product-image (8).png",
    productName: "Men's Plain Derby Semi Casual Shoes",
    categories: "Men's Plain Derby Semi Casual Shoes",
    price: "6,400.00",
    detail:
      "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
  };
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
  return (
    <div id={styles.detail}>
      <Grid container spacing={2} rowSpacing={6}>
        <Grid item xs={12} md={12}>
          <div className={styles.div1}>
            <div className={styles.logo}></div>
            <div className={styles.iconGroup}>
              <div className={styles.personIcon}></div>
              <div className={styles.shopingCardIcon}></div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div className={styles.parent}>
            <div className={styles.detail}>
              <Grid container spacing={4} rowSpacing={4}>
                <Grid item xs={12} md={12}>
                  <div className={styles.breadcrumbs}>
                    <p>Home {">"} </p>
                    <a>product</a>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <img
                    src={testproduct.image}
                    alt={testproduct.image}
                    className={styles.imageProduct}
                  />
                  <img
                    src={testproduct.imageMobile}
                    alt={testproduct.imageMobile}
                    className={styles.imageProductMobile}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={styles.detailList}>
                    <div className={styles.header}>
                      {testproduct.productName}
                    </div>
                    <div className={styles.price}>${testproduct.price}</div>
                    <div className={styles.detailProduct}>
                      {testproduct.detail}
                    </div>
                    <div className={styles.quality}>
                      Quantity
                      <div className={styles.buttonGroup}>
                        {/* <ColorButton variant="contained">Custom CSS</ColorButton> */}
                        <Button variant="outlined" disabled={quality === 0} onClick={(e) => setQuality(quality - 1)} >
                          -
                        </Button>
                        <TextField
                          type="number"
                          value={quality}
                          sx={{ width: '70px', textAlign: 'center' }}
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
        <Grid item xs={12} md={12}>
          <div className={styles.div3}>
            <p className={styles.footer}>Copyright 2023 Online Shop</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
