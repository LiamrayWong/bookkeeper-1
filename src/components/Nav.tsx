import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
    line-height: 24px;
    box-shadow: 0 0 3px rgb(0,0,0,0.25);
    > ul{
      display: flex;
      > li {
        width: 33.3333%;
        text-align: center;
        font-size: 14px;
        > a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 6px;
          margin-bottom: 2px;
          .icon{
            width: 24px;
            height: 24px;
          }
        }
       
        
      }
      
    }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name='tag'/>
            标签页
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name='money'/>
            记账页
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name='chart'/>
            统计页
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;