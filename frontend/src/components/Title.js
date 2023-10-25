import styled from 'styled-components';

const Wrapper = styled.div`
    //width: 100%;
    height: 150px;
    display: flex;
    font-size: 40px;
    //padding: 30px;
    margin: 1em;
    padding-left: 80px;
`

const Title = () => {
    return(
        <Wrapper>
            <h2>rePlay 🌟</h2>
        </Wrapper>
    )
}

export default Title;
