import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    transform: translateY(-15px);
`;
const Button1 = styled.button`
    justify-content: center;
    width: 155px;
    height: 40px;
    background-color: #2c76ff;
    border-color: #ffffff;
    border-radius: 5%;
    color: white;
    margin-right: 2%;
    font-size: 15px;
    &:hover {
        background-color: #004ddb;
    }
    &:focus {
        border-color: #0095ff;
        border-width: 4px;
    }
`;
const Button2 = styled.button`
    justify-content: center;
    width: 155px;
    height: 40px;
    background-color: #616A6B;
    border-color: #ffffff;
    color: white;
    border-radius: 5%;
    font-size: 15px;
    &:hover {
        background-color: #515A5A;
    }
    &:focus {
        border-color: #c5c6c6;
        border-width: 4px;
    }
`;

const Mainbutton = () => {
    return (
        <div>
            <Wrapper>
                <Button1>Main call to action</Button1>
                <Button2>Secondary action</Button2>
            </Wrapper>
        </div> 
    );
};

export default Mainbutton;
