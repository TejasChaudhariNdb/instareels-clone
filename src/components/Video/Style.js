import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    videoStyles: {
        height: "25rem",
        width: "100%",
        background: "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        scrollSnapAlign: "start",
        "&::-webkit-media-controls-panel": {
            display: "none !important", // Hide the media controls panel
        },
        "&::-webkit-media-controls-enclosure": {
            display: "none !important", // Hide the entire media controls enclosure (including buttons)
        },
        // scrollSnapAlign: "start"
    }
});