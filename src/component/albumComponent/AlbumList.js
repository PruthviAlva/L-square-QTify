import React, { useState } from 'react';
import {
    Button,
    Typography,
    Tabs,
    Tab
} from "@mui/material";
import Carousel from '../carouselComponent/Carousel';
import AlbumCard from "./AlbumCard";

const AlbumList = ({ text = "", albums = [], selectedGenre, handleTabChange, genresData = [] }) => {

    const [showCarousel, setShowCarousel] = useState(true);

    const handleCollapseClick = () => {
        setShowCarousel(prevState => !prevState);
    };

    return (
        <div className="top-albums">
            {text !== "Songs" ?
                (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                            {text}
                        </Typography>
                        <Button onClick={handleCollapseClick} style={{ color: 'green' }}>{showCarousel ? 'Show All' : 'Collapse'}</Button>
                    </div>
                )
                :
                (
                    <>
                        <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                            Songs
                        </Typography>

                        {/* Tabs for genres */}
                        <Tabs value={selectedGenre} onChange={handleTabChange} aria-label="Genres Tabs" style={{ marginBottom: '1rem', color: 'green' }}>
                            {genresData.map((genre) => (
                                <Tab key={genre.key} label={genre.label} style={{ color: 'white' }} />
                            ))}
                        </Tabs>
                    </>
                )
            }
            {showCarousel ? (
                <Carousel
                    data={albums}
                    renderItem={(album) => (
                        <AlbumCard album={album} />
                    )}
                    slidesPerView={5}
                />
            ) : (
                <div className="grid-of-cards">
                    {albums.map((album) => (
                        <AlbumCard album={album} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AlbumList;
