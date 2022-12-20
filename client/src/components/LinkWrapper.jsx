import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div``;

const LinkWrapper = ({ children, to }) => {
    return (
        <Wrapper>
            <Link to={to} style={{ textDecoration: "none", color: "black" }}>
                {children}
            </Link>
        </Wrapper>
    );
};
export default LinkWrapper;
