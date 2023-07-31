import { useState } from 'react';
import styled from 'styled-components';
import { SearchBar } from './components/SearchBar';
import { TreeMenu } from './components/TreeMenu';
import data from './data.json';
import { colors } from './styles.ts/colors';

export const App = () => {
  const [searchData, setSearchData] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchData(value);
  };
  return (
    <StyledContainer>
      <StyledTitle>Коды ОКВЭД </StyledTitle>
      <SearchBar
        value={searchData}
        handleChange={handleChange}
        setSearchData={setSearchData}
      />
      <StyledTree>
        <TreeMenu searchData={searchData} data={data} />
      </StyledTree>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;
const StyledTitle = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;
const StyledTree = styled.div`
  width: 90%;
  margin: auto;
  padding: 1rem;
  border: 1px solid ${colors.grey};
  border-radius: 8px;
`;
