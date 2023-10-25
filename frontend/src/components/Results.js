import styled from "styled-components";
import "../css/searchPage.css";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
  position: relative;
  //width: 100%;
  height: 100vh;
  padding: 3em;
  overflow-y: auto;
  justify-content: center;
  text-align: center;
  color: aliceblue;
`;

const Results = ({ apps, navigateToApp }) => {

  return (
    <Wrapper>
      {apps.length !== 0 ? (
        apps.map((item) => (
          <>
            <div className="resBlock" key={item.app_id}>
              <div className="resImgContainer" key={item.app_id}>
                <img className="resImg" src={item.app_image} />
              </div>
              <div className="resInfo">
                <div className="title">
                  <h5 className="name"> {item.app_name} </h5>
                  <div className="comments">
                    <Button icon={<LikeOutlined />}></Button>
                    {/* {
                      item.advantage.map((key, idx) => {
                        return <Button key={idx}>{key}</Button>
                      })
                    } */}
                    <Button>{ item.advantage[0] }</Button>
                    <Button>{ item.advantage[1] }</Button>
                    <Button>{ item.advantage[2] }</Button>
                  </div>
                  <div className="comments">
                    <Button icon={<DislikeOutlined />}></Button>
                    <Button>{ item.disadvantage[0] }</Button>
                    <Button>{ item.disadvantage[1] }</Button>
                    {/* <Button>{ item.disadvantage[2] }</Button> */}
                  </div>
                  <div className="rating" onClick={() => { navigateToApp(item.app_id) }}>
                    <p>查看評價🌟</p>
                    {/* <img src={starImg} className='starImg'/> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))
      ) : (
        <p>No app existed !</p>
      )}
    </Wrapper>
  );
};

export default Results;
