import {useEffect, useRef} from 'react';


const useUpdate = (fn:()=>void,deps:any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      fn()
    }
  }, deps); //每次变化生成新的对象
};

export {useUpdate}
