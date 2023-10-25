import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import { useNavigate } from "react-router-dom";
import { startSearch, searchKeyword } from "../api";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  //height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const navigateToApp = async(id) => {
    navigate(`/app/:${id}`,{
        state: {
            id: id
        }
    });
  };


  const [apps, setApps] = useState([]);

  useEffect(() => {
    const asyncfunction = async () => {
      const data = await startSearch();
      //console.log("data", data);
      setApps(data);
    };
    asyncfunction();
  }, []);

  const handleSearch = (value) => {
    const asyncfunction = async () => {
        const dataKeyword = await searchKeyword(value);
        console.log('search data: ', dataKeyword);
        setApps(dataKeyword);
    };
    asyncfunction();
  };

  return (
    <Wrapper>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <Results 
        apps={apps} 
        navigateToApp={navigateToApp} 
        />
    </Wrapper>
  );
};

export default SearchPage;
