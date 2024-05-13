import Card from "../components/card/photocards";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: fit-content;
    background-color: #f6f6f6;
`;
const Displaybox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; 
    padding: 30px 0 30px 0; 
`;

const  Album = () => {
    return (
        <Wrapper>
            <Displaybox>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Displaybox>
        </Wrapper>
    );
};

export default Album;