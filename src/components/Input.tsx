import styled from 'styled-components';
import React from 'react';

const Laybal = styled.label`
    display: flex; 
    align-items: center;
    > span{
      margin-right: 16px;
      white-space : nowrap;
    }
    > input{
    display: block;
    width: 100%;
    height: 72px;
    border: none;
    background: none;
    }
`;
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  const {label, ...rest} = props;
  return (
    <Laybal>
      <span>{props.label}</span>
      <input type="text" {...rest}/>
    </Laybal>
  );
};

export {Input};