import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: #ffffff;
    color: gray;
`;
const Copytxt = styled.div`
    transform: translateY(-10px) translateX(170px);
    width: 100%;
`;
const Toptxt = styled.div`
    width: 100%;
    transform: translateY(-10px) translateX(450px);
`;

const Footer = () => {
    return (
        <Wrapper>
            <Copytxt>
                <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
                <p>New to Bootstrap? <a href="#">Visit the homepage</a> or read our <a href="#">getting started guide</a>.</p>
            </Copytxt>
            <Toptxt><a href="#">Back to top</a></Toptxt>
        </Wrapper>
    );
};

export default Footer;