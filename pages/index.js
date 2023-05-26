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
import Product from "./api/getrProduct";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [filter, setFilter] = React.useState(0);
  const [product, setProduct] = React.useState();

  if (!session) {
    console.log(status);
  }
  React.useEffect(() => {
    const fetchProduct = async () => {
      const res = await Product.ProductList();
      setProduct(res.data);
    };
    fetchProduct();
  }, []);
  return (
    product && (
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
                  <Grid item xs={6} md={3} key={e.id}>
                    <Card>
                      <CardActionArea
                        component="div"
                        onClick={() =>
                          router.push(
                            `/detail?productName=${e.attributes.productName}&productId=${e.id}`
                          )
                        }
                      >
                        <img
                          src={`http://localhost:1337${e.attributes.image.data.attributes.url}`}
                          alt={e.attributes.image.data.attributes.url}
                          className={styles.imageProduct}
                        />
                        <img
                          src={`http://localhost:1337${e.attributes.imageMobile.data.attributes.url}`}
                          alt={e.attributes.imageMobile.data.attributes.url}
                          className={styles.imageProductMobile}
                        />
                        <CardContent>
                          <div className={styles.detailCard}>
                            <p>{e.attributes.productName}</p>
                            <a>฿ {e.attributes.price}</a>
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
    )
  );
}
