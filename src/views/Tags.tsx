import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  background: white;
  font-size: 16px;
  > li{
    border-bottom: 1px solid #d5d5d5;
    margin: 0 16px; 
    > a{
      padding: 12px 0 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  
`;

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 10px 12px;
  background: #767676;
  border-radius: 4px;
  color: white;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 42px;
`;

function Tags() {
  const {tags} = useTags();

  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.name}>
              <span className='oneLine'>{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export {Tags};