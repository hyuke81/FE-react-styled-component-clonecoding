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
    transform: translateY(-10px) translateX(207px);
    width: 190%;
`;
const Toptxt = styled.div`
    width: 100%;
    transform: translateY(-10px) translateX(600px);
`;
const Visittxt = styled.div`
    display: flex;
    align-items: center;
    width: 180%;
    transform: translateY(25px) translateX(-730px);
`;

const Footer = () => {
    return (
        <Wrapper>
            <Copytxt><p>Album example is © Bootstrap, but please download and customize it for yourself!</p></Copytxt>
            <Toptxt><a href="#">Back to top</a></Toptxt>
            <Visittxt ><p>New to Bootstrap? <a href="#">Visit the homepage</a> or read our <a href="#">getting started guide</a>.</p></Visittxt>
        </Wrapper>
    );
};

export default Footer;