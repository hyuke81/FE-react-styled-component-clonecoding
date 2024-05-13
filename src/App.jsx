import Banner from "./pages/banner";
import Head from "./pages/head";
import Album from "./pages/album";
import Foot from "./pages/foot";
import styled from "styled-components";

const Fix = styled.div`
    overflow-x: hidden;
`;

function App() {
  return (
    <Fix>
      <Head/>
      <Banner/>
      <Album/>
      <Foot/>
    </Fix>
  );
}

export default App;

