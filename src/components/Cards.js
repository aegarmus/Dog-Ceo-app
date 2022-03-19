import React from "react";
import { Grid, Card, CardMedia} from '@mui/material';
import "./cards.css";

export const Cards = ({ breedImage }) => {
    return (
      <Grid className="container-grid" container spacing={{ xs: 0.3, md: 0.3 }} columns={{ xs: 4, sm: 12, md: 12 }}> 
        {breedImage && breedImage.map((urlImage, index) =>
          <Grid item xs={4} sm={4} md={3} key={index}>
            <Card className = "card-media">
              <CardMedia className = "animate__animated animate__zoomIn" 
              component="img" height="140" image={urlImage} />
            </Card>
          </Grid>
        )}
      </Grid>
    );
  };



  /*  <Grid className = "container-grid" container spacing={2}>
      {breedImage &&
        breedImage.map((urlImage, index) => (
          <>
            <Grid item xs={12} md = {6} lg={3}>
              <img className="image" src={urlImage} />
            </Grid>
          </>
        ))}
    </Grid> */
 

  {
    /* <ImageList className = "image-list"
        cols={4}
        rowHeight={121}
      >
        {breedImage && breedImage.map((urlImage, index) =>
          <ImageListItem className="image-list-item" xs={12} key={urlImage + index}>
            <img className="image" src={urlImage} />
          </ImageListItem>
          )
        }
    </ImageList> */
  }


