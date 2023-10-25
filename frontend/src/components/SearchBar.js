import { Input, Tooltip } from "antd";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;
  font-size: 20px;

  &:hover .title {
    cursor: pointer;
  }
`;

const SearchBar = ({ setSearchInput, searchInput, handleSearch }) => {

  const navigate = useNavigate();

  const backToHomepage = () => {
      navigate('/')
  }

  return (
    <Wrapper>
      <Tooltip title='To Homepage'>
        <h2 onClick={() => backToHomepage()} className='title'>rePlay 🌟</h2>
      </Tooltip>
      <Input.Search
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="搜尋 APP"
        style={{ width: "40%" }}
        onSearch={handleSearch}
      />
    </Wrapper>
  );
};

export default SearchBar;
