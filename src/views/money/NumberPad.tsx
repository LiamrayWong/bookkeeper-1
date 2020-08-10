import React from 'react';
import {Wrapper} from './NumberPad/Wrapper';
import {generateOutput} from './NumberPad/generateOutput';

type Props = {
  value: number;
  onChange: (selectedTags: number) => void;
  onConfirm?: () => void
}

const NumberPad: React.FC<Props> = (props) => {
  const output = props.value.toString();
  const setOutput = (output: string) => {
    let value;
    if (output.length > 16) {
      value = parseFloat(output.slice(0, 16));
    } else if (output === '') {
      value = 0;
    } else {
      value = parseFloat(output);
    }
    props.onChange(value);
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === '确认') {
      if(props.onConfirm){props.onConfirm()}
      return;
    }
    setOutput(generateOutput(text, output));
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">确认</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};

export {NumberPad};