import {
  LandingImage,
  LandingMessage,
  LandingWrapper,
  Motto,
  LandingMessageContainer,
  Button
} from "./landingElements";
import Student from "../../assets/student.png";

const Landing = () => {
  const HandleScroll = () =>{
    let spotlight = document.getElementById('selector')
    spotlight.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <LandingWrapper>
        <LandingMessageContainer>
          <Motto>Trouble finding internships?</Motto>
          <LandingMessage>Don't worry, InterSahara  is here to be your "Sahara" inorder to help you secure your dream internship.</LandingMessage>
          <Button onClick={HandleScroll}>Get Started</Button>
        </LandingMessageContainer>
        <LandingImage src={Student} />
      </LandingWrapper>
    </>
  );
};

export default Landing;
