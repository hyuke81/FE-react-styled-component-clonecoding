import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 400px;
    background-color: white;
    border: 0.5px solid lightgray;
    border-radius: 2%;
    position: relative;
`;
const Photo = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        border-radius: 2% 2% 0 0;
    }
`;
const Textbox = styled.div`
    justify-content: center;
    color: black;
    font-size: 16px;
    margin: 10px 15px 10px 20px;
`;
const Buttoncontainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin-left: 20px;
    margin-bottom: 10px;
`;
const Button1 = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: darkgray;
    background-color: white;
    font-size: 15px;
    width: 170px;
    height: 30px;
    border: 1px solid gray; 
    border-radius: 5px 0 0 5px;
    &:hover {
        background-color: gray;
        color: white;
    }
`;
const Button2 = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: darkgray;
    background-color: white;
    font-size: 15px;
    width: 170px;
    height: 30px;
    border: 1px solid gray; 
    border-radius: 0 5px 5px 0;
    &:hover {
        background-color: gray;
        color: white;
    }
`;
const Timetext = styled.div`
    display: flex;
    justify-content: right;
    color: darkgray;
    font-size: 13px;
    margin-right: 40px; 
    transform: translateY(-35px);
`;
const Card = () => {
    return (
        <Wrapper>
            <Photo>
                <img src = ".\src\assets\dark.jpg"></img>
            </Photo>
            <Textbox>
                <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </Textbox>
            <Buttoncontainer>
                <Button1>View</Button1><Button2>Edit</Button2>
            </Buttoncontainer>
            <Timetext>9 mins</Timetext>
        </Wrapper>
    );
};

export default Card;
