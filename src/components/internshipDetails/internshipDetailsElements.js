import styled from "styled-components";
import { SelectorHeading } from "../selector/selectorElements";

export const InternshipDetailsContainer = styled.div`
  /* border: 1px solid black; */
`;

export const InternShipTitle = styled(SelectorHeading)`
  font-size: 2rem;
  margin-left: 2%;
`;

export const InternshipsWrapper = styled.div`
  /* border: 1px solid green; */
`;

export const InternshipCard = styled.div`
  width: 50%;
  background: #fff;
  padding: 1rem;
  padding-bottom: 2.5rem;
  margin: 2% auto;
  font-family: "Roboto Slab";
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%);
  border: 1px solid #eee;
`;

export const InternshipRole = styled.p`
  font-size: 2rem;
  font-family: "Teko";
  margin: 0;
`;

export const InternshipCompany = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

export const Stipend = styled.span`
  color: grey;
`;

export const DueDate = styled.span`
  color: grey;
`;
export const Location = styled.span`
  color: grey;
`;
export const ViewDetails = styled.a`
  color: green;
  float: right;
  margin-top: 1%;
  cursor: pointer;
`;
export const CompanyLogo = styled.img`
  float: right;
  width: 3rem;
`;
export const IconWrapper = styled.div`
margin-top: 2%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const MiniIcon = styled.img`
  width: 0.9rem;
  margin-top: 5%;
`;


export const LoadingImg = styled.img`
  width: 5rem;
  margin: 2% 45%;
`;