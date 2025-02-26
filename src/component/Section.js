import React, { useState, useEffect } from 'react';
import {
    Box,
} from "@mui/material";
import axios from 'axios';
import { useSnackbar } from "notistack";
import AlbumList from './albumComponent/AlbumList';

const Section = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [songsData, setSongsData] = useState([]);
    const [genresData, setGenresData] = useState([
        { key: "all", label: "All" }
    ]);
    const [selectedGenre, setSelectedGenre] = useState(0);
    const [filteredSongs, setFilteredSongs] = useState([]);

    useEffect(() => {
        fetchTopAlbums();
        fetchNewAlbums();
        fetchGenresData();
        fetchSongData();
    }, []);

    const fetchTopAlbums = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
            setTopAlbums(response.data);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                enqueueSnackbar(error.response.data.message, { variant: "error" });
            } else {
                enqueueSnackbar(
                    "Something went wrong. Check the backend console for more details",
                    { variant: "error" }
                );
            }
        }
    };

    const fetchNewAlbums = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
            setNewAlbums(response.data);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                enqueueSnackbar(error.response.data.message, { variant: "error" });
            } else {
                enqueueSnackbar(
                    "Something went wrong. Check the backend console for more details",
                    { variant: "error" }
                );
            }
        }
    };

    const fetchGenresData = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
            setGenresData([
                { key: "all", label: "All" },
                ...response.data.data
            ]);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                enqueueSnackbar(error.response.data.message, { variant: "error" });
            } else {
                enqueueSnackbar(
                    "Something went wrong. Check the backend console for more details",
                    { variant: "error" }
                );
            }
        }
    }

    const fetchSongData = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/songs");
            setSongsData(response.data);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                enqueueSnackbar(error.response.data.message, { variant: "error" });
            } else {
                enqueueSnackbar(
                    "Something went wrong. Check the backend console for more details",
                    { variant: "error" }
                );
            }
        }
    }

    // Filter songs based on selected genre
    useEffect(() => {
        if (selectedGenre) {
            const filtered = songsData.filter(song => song.genre.key === genresData[selectedGenre].key);
            setFilteredSongs(filtered);
        }
    }, [selectedGenre, songsData]);

    // Handle Tab change
    const handleTabChange = (event, newValue) => {
        setSelectedGenre(newValue);
    };

    return (
        <div>
            <Box style={{ padding: '0 2rem', marginBottom: "2rem" }}>
                <AlbumList text="Top Album" albums={topAlbums} />
            </Box>
            <Box style={{ padding: '0 2rem', marginBottom: "2rem" }}>
                <AlbumList text="New Album" albums={newAlbums} />
            </Box>
            <Box style={{ padding: '0 2rem', marginBottom: "2rem" }}>
                {selectedGenre !== 0 ?
                    (
                        <AlbumList text="Songs" albums={filteredSongs} selectedGenre={selectedGenre} handleTabChange={handleTabChange} genresData={genresData} />
                    )
                    :
                    (
                        <AlbumList text="Songs" albums={songsData} selectedGenre={selectedGenre} handleTabChange={handleTabChange} genresData={genresData} />
                    )
                }
            </Box>
        </div>
    );
};

export default Section;