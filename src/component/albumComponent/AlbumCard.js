import {
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Typography,
    Chip,
} from "@mui/material";
import React from "react";
import "./AlbumCard.css";

function AlbumCard({ album }) {

    return (
        <Card className="card">
            <CardActionArea style={{ borderRadius: '12px' }}>
                <CardMedia
                    className="image"
                    component="img"
                    image={album.image}
                    height="210"
                    alt="AlbumCard"
                    style={{ objectFit: "fill" }}
                />
                <Typography variant="body2" style={{ padding: '4px 8px' }}>
                    <Chip style={{ backgroundColor: 'black', color: 'white' }} label={`${album.follows} Follows`} />
                </Typography>
            </CardActionArea>
            <CardActions className="card-actions">
                <Typography variant="body2" color="white">
                    {album.title}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default AlbumCard;
