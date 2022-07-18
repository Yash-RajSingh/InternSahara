import {
  FooterItem,
  SubContainerWrapper,
  FooterTitle,
  FooterWrapper,
  SubContainer,
  FooterMessage,
  FooterBottom,
} from "./footerElements";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();
  const clickHandler = (event) => {
    navigate(`/internships/${event.currentTarget.id}`);
  };

  return (
    <>
      <FooterWrapper>
        <Link to="/" style={{textDecoration: "none"}}>
          <FooterTitle>InternSahara</FooterTitle>
        </Link>
        <FooterBottom>
          <FooterMessage>
            Its time to grab and ace that internship that you've always dreamed
            of!
          </FooterMessage>
          <SubContainerWrapper>
            <SubContainer>
              <FooterItem id="web_development" onClick={clickHandler}>
                Web Development
              </FooterItem>
              <FooterItem id="app_development" onClick={clickHandler}>
                App Development
              </FooterItem>
              <FooterItem id="software_engineering" onClick={clickHandler}>
                Software Engineering
              </FooterItem>
              <FooterItem id="graphic_design" onClick={clickHandler}>
                Graphic Design
              </FooterItem>
              <FooterItem id="content_writing" onClick={clickHandler}>
                Content Writing
              </FooterItem>
            </SubContainer>
            <SubContainer>
              <FooterItem id="human_resource" onClick={clickHandler}>
                Human Resources
              </FooterItem>
              <FooterItem id="business_development" onClick={clickHandler}>
                Business Development
              </FooterItem>
              <FooterItem id="data_analytics" onClick={clickHandler}>
                Data Analytics
              </FooterItem>
              <FooterItem id="legal" onClick={clickHandler}>
                Law/Legal
              </FooterItem>
              <FooterItem id="campus_ambassador" onClick={clickHandler}>
                Campus Ambassador
              </FooterItem>
            </SubContainer>
          </SubContainerWrapper>
        </FooterBottom>
      </FooterWrapper>
    </>
  );
};

export default Footer;
