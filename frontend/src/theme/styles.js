const styles = {
    global: {
        ".table": {
            border: "3px solid var(--border-gray)",
            borderRadius: "3px",
            backgroundColor: "white",
        },
         ".tr": {
            display: "flex",
            width: "fit-content",
        },
        ".th": {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--inside-gray)",
            padding: "0.5rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
        },
        ".resizer": {
            position: "absolute",
            opacity: 0,
            top: 0,
            right: 0,
            h: "100%",
            w: "5px",
            bg: "#27bbff",
            cursor: "col-resize",
            userSelect: "none",
            touchAction: "none",
            borderRadius: "6px",
            },
        ".resizer.isResizing": {
            bg: "#2eff31",
            opacity: 1,
        },
        "*:hover > .resizer": {
            opacity: 1,
        },
    },
};

export default styles;