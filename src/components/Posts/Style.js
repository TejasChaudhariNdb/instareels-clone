import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    reelsContainer: {
        position:"relative",
        width: "33rem",
        height: "750px",
        margin: "auto",
        overflow: "scroll",
        maxWidth: "400px",
        scrollSnapType: "y mandatory",
        borderRadius: "20px",
        MsOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {  // Corrected syntax here
            display: "none",
        },
    },
    likeStat: {
        fontSize: "18px",
    textAlign:'center',
    color: 'white',
    },
    modal: {
        width: "40rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        margin: "0"
    },
    videoContainer: {
        height: "25rem",
        width: "20rem",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        margin: "0"
    },
    commentBox: {
        height: "23rem",
        width: "calc(100% - 20rem)",
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
        paddingBottom: '30px'
    },
    actionbutton:{
        right: "22px",
        position: "absolute",
        display: "flex",
        flexDirection: "column-reverse",
        bottom:"10px",
    }
}));