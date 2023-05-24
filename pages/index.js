import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layouts/layout.js";
import React from "react";
import { useSession, signIn } from "next-auth/react";

import { useRouter } from "next/router";

import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [filter, setFilter] = React.useState(0);
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

  React.useEffect(() => {});
  if (!session) {
    console.log(status);
  }
  return (
    <div id={styles.homepage}>
      <Layout>
        <div className={styles.parent}>
          <Carousel
            style={{
              textAlign: "center",
              maxWidth: "984px",
              maxHeight: "431px",
            }}
            className={styles.banner}
          >
            {[1, 2, 3, 4].map((item, i) => (
              <div className={styles.imageBanner} key={i} />
            ))}
          </Carousel>
          <div className={styles.detail}>
            <p>NEW ARRIVALS</p>
            <div className={styles.filters}>
              <p>Sort by</p>
              <Select
                value={filter}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={(event) => {
                  setFilter(event.target.value);
                }}
              >
                <MenuItem value={0}>Price : High - Low</MenuItem>
              </Select>
            </div>
            <Grid container spacing={4} rowSpacing={4}>
              {product.map((e) => (
                <Grid item xs={6} md={3} key={e.productId}>
                  <Card>
                    <CardActionArea
                      component="div"
                      onClick={() =>
                        router.push(
                          `/detail?productName=${e.productName}&productId=${e.productId}`
                        )
                      }
                    >
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
                      <CardContent>
                        <div className={styles.detailCard}>
                          <p>{e.categories}</p>
                          <a>฿ {e.price}</a>
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Layout>
    </div>
  );
}
