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
  GoBackButton,
  MiniIcon,
  InternshipPageBody,
  IconWrapper,
  LoadingImg,
  FilterContainer,
  FilterTitle,
  FilterWrapper,
  FilterSelect,
  FilterOptions,
  ClearFilter,
  SubHeader,
} from "./internshipDetailsElements";
import Loading from "../../assets/loading.jpg";
import Back from "../../assets/back.png";
import locationIcon2 from "../../assets/location2.png";
import hourglassIcon from "../../assets/hourglass.png";
import moneyIcon from "../../assets/money.png";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

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
  const SelectRef = useRef();
  const [InternshipData, setInternshipData] = useState();
  const [dataToShow, setDataToShow] = useState();
  let title = HeadingChecker(data.title);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const getInternshipData = async () => {
      try {
        const request = await fetch(
          `https://internscrapper.herokuapp.com/openings/${data.title}`
        );
        const response = await request.json();
        // console.log(response);
        setInternshipData(response);
        setDataToShow(response);
      } catch (err) {
        console.log(err);
      }
    };
    getInternshipData();
  }, [data.title]);

  // Handling Filter Actions
  const handleSelectChange = (val) => {
    var newData = InternshipData.filter((current) => {
      if (current.location === val) return current.location;
    });
    setDataToShow(newData);
    SelectRef.current.blur();
  };

  return (
    <>
      <InternshipDetailsContainer>
        <SubHeader>
          <Link to="/">
            <GoBackButton src={Back} />
          </Link>
          <InternShipTitle>{title} Internships</InternShipTitle>
        </SubHeader>
        <InternshipPageBody>
          <FilterContainer>
            <FilterTitle>Filter</FilterTitle>
            <FilterWrapper>
              <FilterSelect
                ref={SelectRef}
                defaultValue="Location"
                onChange={(e) => handleSelectChange(e.target.value)}
              >
                <FilterOptions style={{display: "none"}}>Location</FilterOptions>
                <FilterOptions value="Work From Home">
                  Work from Home
                </FilterOptions>
                <FilterOptions value="Delhi">Delhi</FilterOptions>
                <FilterOptions value="Mumbai">Mumbai</FilterOptions>
                <FilterOptions value="Jaipur">Jaipur</FilterOptions>
                <FilterOptions value="Noida">Noida</FilterOptions>
                <FilterOptions value="Bangalore">Bangalore</FilterOptions>
                <FilterOptions value="Gurgaon">Gurgaon</FilterOptions>
                <FilterOptions value="Ahmedabad">Ahmedabad</FilterOptions>
                <FilterOptions value="Hyderabad">Hyderabad</FilterOptions>
              </FilterSelect>
              <br/>
              <ClearFilter
                onClick={() => {
                  setDataToShow(InternshipData);
                  SelectRef.current.value = "Location";
                }}
              >
                Reset
              </ClearFilter>
            </FilterWrapper>
          </FilterContainer>
          <InternshipsWrapper>
            {dataToShow ? (
              dataToShow.map((element, index) => {
                let logo;
                if (element.logo !== undefined) {
                  logo = `https://internshala.com${element.logo}`;
                } else {
                  logo = "";
                }
                // var thenum = element.stipend.replace(/[^0-9]/g,'');
                // console.log(thenum)
                return (
                  <>
                    <InternshipCard key={index}>
                      <CompanyLogo src={logo} loading="lazy" />
                      <InternshipRole> {element.role} </InternshipRole>
                      <InternshipCompany> {element.company} </InternshipCompany>
                      <IconWrapper>
                        <Location>
                          {" "}
                          <MiniIcon src={locationIcon2} />{" "}
                          {`${element.location.substring(0, 15)}`}
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
            ) : (
              <LoadingImg src={Loading} />
            )}
          </InternshipsWrapper>
        </InternshipPageBody>
      </InternshipDetailsContainer>
    </>
  );
};

export default InternshipDetails;
