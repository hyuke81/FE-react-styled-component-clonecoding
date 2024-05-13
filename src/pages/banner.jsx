import Bannertext from "../components/banner/bannertext";
import Mainbutton from "../components/button/button";
import styled from "styled-components";


const Textwrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 460px;
    background-color: white;
    color: white;
`;

const  Banner = () => {

    return (
            <Textwrapper>
                <Bannertext />
                <Mainbutton />
            </Textwrapper>
    );
};

export default Banner;