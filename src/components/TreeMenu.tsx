import { styled } from 'styled-components';
import { TreeNode } from './TreeNode';
import { DataItemChildren } from '../types/types';

const StyledWrapList = styled.ul`
  display: flex;
  flex-direction: column;
`;

interface Props {
  data: any;
  searchData: string;
}

export const TreeMenu = ({ data, searchData }: Props) => {
  return (
    <StyledWrapList>
      {data?.map(
        (node: {
          code: string;
          title: string;
          children: DataItemChildren[];
        }) => (
          <TreeNode node={node} key={node.code} searchData={searchData} />
        ),
      )}
    </StyledWrapList>
  );
};
