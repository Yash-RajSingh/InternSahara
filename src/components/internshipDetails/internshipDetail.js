import {
  InternshipDetailsContainer,
  InternShipTitle,
  InternshipsWrapper,
  InternshipCard,
  InternshipRole,
  InternshipCompany,
  Stipend,
  DueDate,
  Location,
  ViewDetails,
  CompanyLogo,
  MiniIcon,
  IconWrapper, LoadingImg
} from "./internshipDetailsElements";
import Loading from "../../assets/loading.jpg";
import locationIcon2 from "../../assets/location2.png";
import hourglassIcon from "../../assets/hourglass.png";
import moneyIcon from "../../assets/money.png";
import { useEffect, useState } from "react";

const HeadingChecker = (currentName) => {
  switch (`${currentName}`) {
    case "web_development":
      return "Web Development";
    case "app_development":
      return "App Development";
    case "software_engineering":
      return "Software Engineering";
    case "graphic_design":
      return "Graphic Design";
    case "content_writing":
      return "Content Writing";
    case "data_analytics":
      return "Data Analytics";
    case "human_resource":
      return "Human Resource";
    case "business_development":
      return "Business Development";
    case "legal":
      return "Law/Legal";
    case "campus_ambassador":
      return "Campus Ambassador";
    default:
      return "";
  }
};

const InternshipDetails = (data) => {
  const [InternshipData, setInternshipData] = useState();
  let title = HeadingChecker(data.title);
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"})
    const getInternshipData = async () => {
      try {
        const request = await fetch(
          `https://internscrapper.herokuapp.com/openings/${data.title}`
        );
        const response = await request.json();
        // console.log(response);
        setInternshipData(response);
      } catch (err) {
        console.log(err);
      }
    };
    getInternshipData();
  }, [data.title]);
  return (
    <>
      <InternshipDetailsContainer>
        <InternShipTitle>{title} Internships</InternShipTitle>
        <InternshipsWrapper>
          {InternshipData ? InternshipData.map((element, index) => {
            let logo;
            if (element.logo !== undefined) {
              logo = `https://internshala.com${element.logo}`;
            } else {
              logo = "";
            }
            return (
              <>
                <InternshipCard key={index}>
                  <CompanyLogo src={logo} />
                  <InternshipRole> {element.role} </InternshipRole>
                  <InternshipCompany> {element.company} </InternshipCompany>
                  <IconWrapper>
                  <Location>
                    {" "}
                    <MiniIcon src={locationIcon2} /> {element.location}{" "}
                  </Location>
                  <Stipend>
                    <MiniIcon src={moneyIcon} /> &nbsp;₹{element.stipend}{" "}
                  </Stipend>
                  <DueDate>
                    <MiniIcon src={hourglassIcon} /> {element.apply_by}{" "}
                  </DueDate>
                  </IconWrapper>
                  <ViewDetails
                    onClick={() => {
                      window.open(`https://internshala.com${element.link}`);
                    }}
                  >
                    {" "}
                    View Details &#x2192;
                  </ViewDetails>
                </InternshipCard>
              </>
            );
          })
          :
          <LoadingImg src={Loading} /> }
        </InternshipsWrapper>
      </InternshipDetailsContainer>
    </>
  );
};

export default InternshipDetails;
