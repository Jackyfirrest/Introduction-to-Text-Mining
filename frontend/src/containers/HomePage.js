import Title from "../components/Title"
import Intro from "../components/Intro"
import Input from "../components/Input";
import styled from 'styled-components';


const Wrapper = styled.div`
  //height: 100vh;
  width: 100%;
  margin: auto;
`

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const HomePage = () => {

    return(
        <Wrapper>
            <Title/>
            <InputContainer>
                <Intro />
                <Input />
            </InputContainer>
        </Wrapper>
    )
}

export default HomePage;