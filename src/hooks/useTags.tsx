import {useEffect, useRef, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from 'hooks/useUpdate';




const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
      let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
      if (localTags.length === 0) {
        localTags = [
          {id: createId(), name: '衣'},
          {id: createId(), name: '食'},
          {id: createId(), name: '住'},
          {id: createId(), name: '行'}
        ];
      }
      setTags(localTags)
    }, []);
    useUpdate(() => {
      window.localStorage.setItem('tags', JSON.stringify(tags));
    }, [tags]);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const addTag = () => {
      const tagName = window.prompt('请输入新的标签');
      if (tagName !== null && tagName !== '') {
        setTags([...tags, {id: createId(), name: tagName}]);
      }
    };
    const findTagIndex = (id: number) => {
      let result = -1;
      for (let i = 0; i < tags.length; i++) {
        if (id === tags[i].id) {
          result = i;
          break;
        }
      }
      return result;
    };
    const updateTag = (id: number, obj: { name: string }) => {
      //获取 tag 的下标
      const index = findTagIndex(id);
      //深拷贝 tags 得到 tagsClone
      const tagsClone = JSON.parse(JSON.stringify(tags));
      //splice的返回值是删除的元素
      tagsClone.splice(index, 1, {id: id, name: obj.name});
      setTags(tagsClone); //不可变数据，以前的tags是以前的
    };
    const deleteTag = (id: number) => {
      const index = findTagIndex(id);
      const tagsClone = JSON.parse(JSON.stringify(tags));
      tagsClone.splice(index, 1);
      setTags(tagsClone);
    };
    return {tags, setTags, addTag, findTag, updateTag, findTagIndex, deleteTag};
  }
;

export {useTags};