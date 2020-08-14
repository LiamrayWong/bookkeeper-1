import {Layout} from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
  background: white;      
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    font-size: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`
function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [Key: string]: RecordItem[] } = {};//{'2020-5-11':[item,item],'2020-5-12':[item,item],'2020-5-13':[item,item,item,item]}
  const selectedRecords = records.filter(r => r.category === category);
  selectedRecords.forEach(r => {
      const key = day(r.createdAt).format('YYYY年MM月DD日');
      if (!(key in hash)) {
        hash[key] = [];
      }
      hash[key].push(r);
    }
  );
  //把对象变成数组,顺序不能保证
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={(value) => setCategory(value)}/>
      </CategoryWrapper>

      {
        array.map(([date,records]) => <div>
          <Header>
            {date}
          </Header>
          <div>
            {records.map(r => {
              return <Item>
                <div className="tags oneLine">
                  {r.tagIds
                    .map(tagId => <span>{getName(tagId)}</span>)
                    .reduce((result,span,index,array)=>{
                      return result.concat(index<array.length-1?[span,'，']:[span])
                    },[] as ReactNode[])
                  }
                </div>
                {r.note && <div className="note">{r.note}</div>}
                <div className="amount">
                  ￥{r.amount}
                </div>
              </Item>;
            })}
          </div>
        </div>)
      }
    </Layout>
  );
}

export {Statistics};