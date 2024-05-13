import styled from "styled-components";

const HeaderWrapper = styled.div`
    position: fixed; // 추가된 속성
    top: 0;
    z-index: 1000; 
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 55px;
    background-color: black;
    color: white;
`;
const Homesvg = styled.div`
    width: 25px;
    height: 25px;
    margin-left: 200px;
    margin-right: 5px;
`;
const Albumtxt = styled.div`
    margin-right: 65%;
`;
const Button = styled.button`
    justify-content: center;
    width: 50px;
    height: 40px;
    background-color: black;
    border-radius: 10%;
    border-style:  1px solid;
    border-color: gray;
`;

const Headline = () => {
    return (
        <HeaderWrapper>
            <Homesvg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
            </Homesvg>
            <Albumtxt><h3>Album</h3></Albumtxt>
            <Button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </Button>
        </HeaderWrapper>
    );
};

export default Headline;