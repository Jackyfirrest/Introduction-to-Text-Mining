import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../css/appPage.css';
import { Button, Tooltip } from 'antd';
import { getAppContent, getAppAspect } from '../api';
import { useNavigate, useLocation } from 'react-router-dom';


const Wrapper = styled.div`
    display: flex;
    margin-top: 2em;
    position: relative;
    width: 100%;
    overflow-y: auto;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
`

const AppPage = () => {
    const { state } = useLocation()
    //console.log('state', state);

    const [appContent, setAppContent] = useState([])
    const [keywords, setKeywords] = useState([])
    const [comments, setComments] = useState([])

    const handleClickAspect = (aspect) => {
        setComments([]);
        const getAspect = async(aspect) => {
            let com = await getAppAspect(state.id, aspect);
            setComments(com);
            console.log('comments', com);
        }
        getAspect(aspect);
    }

    useEffect(() => {
        const getContent = async() => {
            let content = await getAppContent(state.id);
            setAppContent(content);
            setKeywords(content.keywords);
            console.log(content);
        }
        getContent();
    }, []);
    
    const navigate = useNavigate();
    const backToHomepage = () => {
        navigate('/')
    }


    return(
        <Wrapper>
            <Tooltip title='To Homepage' placement='right'>
                <div className="websiteLogo" onClick={() => backToHomepage()}>
                    <h2>rePlay 🌟</h2>
                </div>
            </Tooltip>
            <div className="block">
                <div className="basic-info">
                    <h5 className="name"> {appContent.app_name} </h5>
                    <img src={appContent.app_image} className='appImg' />
                    <div className="scoreFrame">
                        <p className='number'>{appContent.app_rating}</p>
                    </div>
                </div>
                <div className="commentKeys">
                    <Button onClick={ () => {handleClickAspect('update')} }>Update</Button>
                    <Button onClick={ () => {handleClickAspect('watch')} }>Watch</Button>
                    <Button onClick={ () => {handleClickAspect('gameInfo')} }>Game Info</Button>
                    <Button onClick={ () => {handleClickAspect('otherContent')} }>Other</Button>
                </div>
                <div className="keywordsFrame">
                    <div className="keywords">
                        {
                            keywords.map((kw, idx) => {
                                return <Button className='keyword' key={idx}> {kw} </Button>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="commentList">
                {
                    comments.map((item) => {
                        return(
                            <div className="comment" key={ item.review_id }>
                                <div className="scoreContainer">
                                    <div className="commentScoreFrame">
                                        { item.sentiment }
                                    </div>
                                </div>
                                <div className="contentContainer">{ item.text }</div>
                            </div>
                        
                        )
                    })
                }
            </div>
        </Wrapper>   
    )
}

export default AppPage;