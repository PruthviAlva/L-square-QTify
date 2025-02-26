import React from "react";
import {
  Grid,
  Box,
  Typography,
} from "@mui/material";
import "./Hero.css";

function Hero() {
  return (
    <Grid item className="product-grid" lg={12} md={8}>
      <Box className="hero">
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
          <img
            src={require("../assets/hero_headphones.png")}
            width={212}
            alt="headphones"
          />
        </div>
      </Box>
    </Grid>
  );
}

export default Hero;
