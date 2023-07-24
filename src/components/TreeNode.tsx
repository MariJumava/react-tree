import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { TreeMenu } from './TreeMenu';
import { DataOkved } from '../types/types';
import { colors } from '../styles.ts/colors';

const StyledWrapItem = styled.div<{ isChecked: boolean }>`
  background-color: ${({ isChecked }) =>
    isChecked ? colors.secondary : colors.white};
  padding: 0.7rem 0;
`;
const StyledName = styled.span<{ isChecked: boolean }>`
  margin-right: 0.3rem;
  font-size: 1rem;
  opacity: ${({ isChecked }) => (isChecked ? 1 : 0.6)};
  cursor: pointer;
`;
const StyledChildren = styled.ul`
  padding-left: 1rem;
`;

interface Props {
  node: DataOkved;
  searchData: string;
}

export const TreeNode = ({ node, searchData }: Props) => {
  const [showChildren, setShowChildren] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleClickShow = () => {
    setShowChildren(!showChildren);
  };
  const handleClickItem = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      localStorage.setItem(`KEY_${node.code}`, node.code);
    } else {
      localStorage.removeItem(`KEY_${node.code}`);
    }
  };

  const isSearchItemName = node.title
    .toLocaleLowerCase()
    .includes(searchData.toLocaleLowerCase());

  const isSearchCode = node.code
    .toLocaleLowerCase()
    .includes(searchData.toLocaleLowerCase());

  const color =
    (isSearchItemName || isSearchCode) && searchData !== ''
      ? colors.blue
      : colors.primary;

  const styles = { color };

  useEffect(() => {
    const saveCode = localStorage.getItem(`KEY_${node.code}`);
    setIsChecked(saveCode === node.code);
  }, [node.code]);

  return (
    <>
      <StyledWrapItem onClick={handleClickShow} isChecked={isChecked}>
        <StyledName
          onClick={handleClickItem}
          style={styles}
          isChecked={isChecked}
        >
          {node.title}
        </StyledName>
        {node?.children && (
          <>
            {showChildren && node.children ? (
              <span>&#5121;</span>
            ) : (
              <span>&#5125;</span>
            )}
          </>
        )}
      </StyledWrapItem>
      <StyledChildren>
        {node.children && showChildren && (
          <TreeMenu searchData={searchData} data={node.children} />
        )}
      </StyledChildren>
    </>
  );
};
