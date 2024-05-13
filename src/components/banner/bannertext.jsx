import styled from "styled-components";

const Main = styled.div`
    display: flex;
    font-size: 38px;
    justify-content: center;
    color: black;
    transform: translateY(25px);
`;
const Secondtxt = styled.div`
    display: flex;
    font-size: 18px;
    justify-content: center;
    color: #646464;
    align-items: center;
    text-align: center;
    transform: translateY(-20px);
    line-height: 1.7;
`;

const bannertext = () => {
    return (
        <div>
            <Main><p>Album example</p></Main>
            <Secondtxt>
                <p>Something short and leading about the collection below—its contents,<br/>
                 the creator, etc. Make it short and sweet, but not too short so folks don’t <br/>
                 simply skip over it entirely.</p>
            </Secondtxt>
        </div>
        
    );
};

export default bannertext;