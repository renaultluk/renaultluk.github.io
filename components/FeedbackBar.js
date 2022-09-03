const FeedbackBar = () => {
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                backgroundColor: "#000000",
                borderColor: "#BBBBBD",
                borderBottomWidth: 10,
                justifyContent: "center",
                padding: 8,
            }}
        >
            <h6 style={{ color: "#FFFFFF", textAlign: "center" }}>
                This website is still in its infancy! &nbsp;
                <a 
                    style={{ color: "#E6BCCD" }}
                    href="feedback"
                >
                    Give some feedback
                </a>
            </h6>
        </div>
    )
}

export default FeedbackBar;