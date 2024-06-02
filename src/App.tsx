import React from 'react';
import './App.css';
import styled from "styled-components";
import photo from "../src/assets/images/img.webp";
import {HeadLine} from "./components/Title";
import {Text} from "./components/Text";
import {PrimButton} from "./components/Buttons";
import {SaveButton} from "./components/Buttons";
import {Photo} from "./components/Image";
import {Box} from "./components/Box";


function App() {
  return (
    <div className="App">
 <Box className="Container">
   <Photo src={photo} alt={"image"} />
   <HeadLine>Headline</HeadLine>
   <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
     <PrimButton>See more</PrimButton>
   <SaveButton>Save</SaveButton>

 </Box>
    </div>
  );
}

export default App;











