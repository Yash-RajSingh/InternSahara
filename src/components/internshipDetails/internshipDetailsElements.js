import styled from "styled-components";
import { SelectorHeading } from "../selector/selectorElements";

export const InternshipDetailsContainer = styled.div`
  margin-top: 1%;
`;

export const InternShipTitle = styled(SelectorHeading)`
  font-size: 2rem;
  margin-left: 0;
  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

export const InternshipPageBody = styled.div`
  width: 95%;
  margin: 2% auto;
  display: flex;
  align-items: flex-start;
  gap: 2%;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const InternshipsWrapper = styled.div`
  width: 80%;
  @media (max-width: 720px) {
    width: 95%;
    margin-top: 5%;
  }
`;

export const InternshipCard = styled.div`
  width: 60%;
  background: #fff;
  padding: 1.25rem;
  padding-bottom: 2.7rem;
  margin: 2% auto;
  font-family: "Roboto Slab";
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%);
  border: 1px solid #eee;
  &:nth-child(1) {
    margin-top: 0;
  }

  @media (max-width: 720px) {
    width: 85%;
    margin-top: 3.5%;
  }
`;

export const CompanyLogo = styled.img`
  float: right;
  width: 3rem;
  @media (max-width: 720px) {
    width: 2rem;
  }
`;

export const InternshipRole = styled.p`
  font-size: 2rem;
  font-family: "Teko";
  margin: 0;
  @media (max-width: 720px) {
    font-size: 1.7rem;
  }
`;

export const InternshipCompany = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

export const IconWrapper = styled.div`
  margin-top: 2%;
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const MiniIcon = styled.img`
  width: 0.9rem;
  margin-top: 5%;
`;

export const Location = styled.span`
  color: grey;
  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
`;

export const Stipend = styled.span`
  color: grey;
  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
`;

export const DueDate = styled.span`
  color: grey;
  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
`;

export const ViewDetails = styled.a`
  color: green;
  float: right;
  margin-top: 2%;
  cursor: pointer;
`;

export const LoadingImg = styled.img`
  width: 5rem;
  margin: 2% 45%;
  @media (max-width: 720px) {
    margin-top: 30%;
    margin-bottom: 30%;
  }
`;

export const FilterContainer = styled.div`
  width: 15%;
  background: #fff;
  padding: 1rem;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%);
  border: 1px solid #eee;

  @media (max-width: 720px) {
    margin-top: 2%;
    margin-left: 4%;
    width: 40%;
  }
`;

export const FilterTitle = styled(InternshipRole)`
  font-size: 1.5rem;
  font-family: "Roboto Slab";
  @media (max-width: 720px) {
    font-size: 1.15rem;
  }
`;

export const FilterWrapper = styled.div`
  /* border: 1px solid black; */
  margin-top: 5%;
`;

export const FilterSelect = styled.select`
  border: 1px solid white;
  padding: 0.35rem;
  font-family: "Roboto Slab";
  font-weight: bold;
  border: 0.5px solid rgb(0, 0, 0, 0.15);
`;

export const FilterOptions = styled.option`
  padding: 1rem;
  background: var(--lightest-blue);
  &:hover {
    color: black;
  }
`;

export const ClearFilter = styled.button`
  font-weight: bold;
  padding: 0.4rem 1rem;
  background: var(--strong-blue);
  color: black;
  margin-top: 10%;
  border: 1px solid rgb(0, 0, 0, 0.1);
  font-family: "Roboto Slab";
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  border-radius: 0.25rem;
  cursor: pointer;
  @media (max-width: 720px) {
    margin-top: 5%;
  }
`;

export const SubHeader = styled.div`
  padding-left: 2rem;
  display: flex;
  align-items: center;
  gap: 1%;
`;

export const GoBackButton = styled.img`
  width: 1rem;
  border: 1.5px solid rgb(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 0.5rem;
  background: #fff;
  margin-top: 5px;

  @media (max-width: 720px) {
    width: 0.8rem;
    padding: 0.25rem;
  }
`;
