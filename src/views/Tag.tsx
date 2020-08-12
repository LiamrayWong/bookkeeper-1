import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import {Layout} from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';


const TopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: white;
`
type Params = {
  id: string
}

const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon name=""/>
      </TopBar>
      <div>
        <label>
          <span>备注</span>
          <input type="text" placeholder="标签"
          />
        </label>
      </div>
      <Button>删除标签</Button>
    </Layout>
  );
};

export {Tag};


