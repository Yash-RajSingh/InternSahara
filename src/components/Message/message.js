import { HiredImage, HiredMessage, MessageContainer } from "./messageElements";
import Hired from '../../assets/hired.png'
const Message = () => {
    return ( 
        <>
        <MessageContainer>
            <HiredMessage>It's time to get hired <br /> and <br /> Fulfill your dreams!!</HiredMessage>
            <HiredImage src={Hired} alt="Hired man"/>
        </MessageContainer>
        </>
     );
}
 
export default Message;