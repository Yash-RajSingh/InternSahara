import {
  SelectorContainer,
  SelectorHeading,
  SelectorIcon,
  SelectorItem,
  SelectorTitle,
  SelectorWrapper,
} from "./selectorElements";
import SelectorData from "../../data/streamlist.json";
import { useNavigate } from "react-router-dom";

const Selector = () => {
  let navigate = useNavigate();
  return (
    <>
      <SelectorContainer id="selector">
        <SelectorHeading>Choose your stream</SelectorHeading>
        <SelectorWrapper>
          {SelectorData.map((element, index) => {
            return (
              <>
                <SelectorItem
                  onClick={() => {
                    navigate(`/internships/${element.alias}`);
                  }}
                  key={index}
                >
                  <SelectorIcon src={element.icon} alt="Icon" />
                  <SelectorTitle>{element.name}</SelectorTitle>
                </SelectorItem>
              </>
            );
          })}
        </SelectorWrapper>
      </SelectorContainer>
    </>
  );
};

export default Selector;
