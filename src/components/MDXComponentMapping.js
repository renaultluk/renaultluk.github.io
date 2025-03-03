const Anchor = (props) => {
    return (
        <a target="_blank" rel="noopener noreferrer" style={{ color: "#D295BF" }} {...props} />
    );
}

const MDXComponentMapping = {
    h1: ({children}) => <h1>{children}</h1>,
    a: Anchor,
};

export default MDXComponentMapping;