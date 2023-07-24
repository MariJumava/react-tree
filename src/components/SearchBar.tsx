import { useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../styles.ts/colors';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
const StyledInput = styled.input`
  max-height: 2.5rem;
  min-width: 15rem;
  width: 40vw;
  border: 1px solid ${colors.grey};
  border-radius: 8px;
  padding: 0.5rem 1rem;
`;
const StyledButton = styled.button`
  width: 5rem;
  height: 2.2;
  margin-left: 1rem;
  font-size: 0.8;
  background-color: ${colors.red};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ handleChange, value, setSearchData }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const onClear = () => {
    setSearchData('');
    ref.current?.focus();
  };

  return (
    <StyledContainer>
      <StyledInput
        placeholder="Поиск..."
        value={value}
        onChange={handleChange}
        ref={ref}
      />
      <StyledButton onClick={onClear}>Очистить</StyledButton>
    </StyledContainer>
  );
};
