import React from "react";
import styles from "@/styles/cart.module.css";
import Layout from "@/components/Layouts/layout.js";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Cart() {
  const [showCart, setShowCart] = React.useState();
  const [total, setTotal] = React.useState(0);
  const [subtotal, setSubtotal] = React.useState(0);
  const [item, setItem] = React.useState([
    { productId: 0, quality: 1 },
    { productId: 2, quality: 2 },
  ]);
  const product = [
    {
      productId: 0,
      image: "/image/product/product-image.png",
      imageMobile: "/image/product/product-image (8).png",
      productName: "Men's Plain Derby Semi Casual Shoes",
      categories: "Men's Plain Derby Semi Casual Shoes",
      price: "6400.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 1,
      image: "/image/product/product-image (1).png",
      imageMobile: "/image/product/product-image (9).png",
      productName: "Men’s Sports Walking Shoes",
      categories: "Men’s Sports Walking Shoes",
      price: "6700.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 2,
      image: "/image/product/product-image (2).png",
      imageMobile: "/image/product/product-image (10).png",
      productName: "Men's Cosk Walking,Gym Shoes",
      categories: "Men's Cosk Walking,Gym Shoes",
      price: "6600.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 3,
      image: "/image/product/product-image (3).png",
      imageMobile: "/image/product/product-image (11).png",
      productName: "Men'sports Walking & Gym Shoes",
      categories: "Men'sports Walking & Gym Shoes",
      price: "6500.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 4,
      image: "/image/product/product-image (4).png",
      imageMobile: "/image/product/product-image (12).png",
      productName: "Men's OXYFIT (N) Walking Shoe",
      categories: "Men's OXYFIT (N) Walking Shoe",
      price: "6400.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 5,
      image: "/image/product/product-image (5).png",
      imageMobile: "/image/product/product-image (13).png",
      productName: "Men's 3392 Stylish Casual Shoes",
      categories: "Men's 3392 Stylish Casual Shoes",
      price: "6300.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 6,
      image: "/image/product/product-image (6).png",
      imageMobile: "/image/product/product-image (14).png",
      productName: "Men's Milan Best Running Shoes",
      categories: "Men's Milan Best Running Shoes",
      price: "6200.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
    {
      productId: 7,
      image: "/image/product/product-image (7).png",
      imageMobile: "/image/product/product-image (15).png",
      productName: "Men's Creta-12 Men's Running Shoes",
      categories: "Men's Creta-12 Men's Running Shoes",
      price: "6100.00",
      detail:
        "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    },
  ];
  const handleChange = (index, value) => {
    const clone = [...item];
    clone[index].quality = value;
    setItem(clone);
  };
  React.useEffect(() => {
    const setProduct = item.map(
      (e) => product.filter((list) => e.productId === list.productId)[0]
    );
    setShowCart(setProduct);
  }, []);
  React.useEffect(() => {
    const setProduct = item.map(
      (e) => product.filter((list) => e.productId === list.productId)[0]
    );
    let setPrice = 0;
    setProduct.map((e) => {
      item.filter((list) => {
        if (e.productId === list.productId) {
          setPrice = setPrice + parseInt(e.price) * list.quality;
        }
      });
    });
    setTotal(setPrice + item.length * 100)
    setSubtotal(setPrice);
  }, [item]);
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
                    {showCart.map((e, index) => (
                      <div key={e.productId}>
                        <Grid container spacing={4} rowSpacing={4}>
                          <Grid item xs={6} md={3}>
                            <img
                              src={e.image}
                              alt={e.image}
                              className={styles.imageProduct}
                            />
                            <img
                              src={e.imageMobile}
                              alt={e.imageMobile}
                              className={styles.imageProductMobile}
                            />
                          </Grid>
                          <Grid item xs={6} md={9}>
                            <div className={styles.detailList}>
                              <Grid item xs={12} md={10}>
                                <p>{e.productName}</p>
                              </Grid>
                              <Grid item xs={12} md={2}>
                                <p>
                                  ฿{parseInt(e.price) * item[index].quality}
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
                                        item[index].quality - 1
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
                                        item[index].quality + 1
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
                      // onClick={onSubmit}
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
