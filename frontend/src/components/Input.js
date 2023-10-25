import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Image, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getPredictApp } from '../api';
import negImg from './images/negative.png';
import posImg from './images/positive.png';

const Wrapper = styled.div`
    width: 30%;
    height: 300px;
    background: #eeeeee52;
    border-radius: 20px;
    margin: 20px;
    padding: 40px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    & .imgContainer {
        display: flex;
        width: 120px;
    }
`

const InputComment = () => {

    const navigate = useNavigate();

    const navigateToApp = (id) => {
        navigate(`/app/:${id}`, {
            state: {
                id: id
            }
        })
    }

    const handlePrediction = async(input) => {
        const result = await getPredictApp(input);
        console.log('predicted result', result);
        navigateToApp(result.app_id);
    }
    

    return (
        <Wrapper>
            <h2>我要預測APP</h2>
            <p>想尋找某種特性的APP卻又毫無頭緒，請輸入一段評論讓我們幫你找到最適配的 App！</p>
            <div className="imgContainer">
                <Tooltip title='most common positive comment'>
                    <Image src={posImg} width={50} />
                </Tooltip>
                <Tooltip title='most common negative comment'>
                    <Image src={negImg} width={50} />
                </Tooltip>
            </div>
            <Input.Search
                placeholder="輸入你的評論"
                onSearch={handlePrediction}
                style={{
                    width: 200,
                }}
            />
        </Wrapper>
    )
}

export default InputComment;