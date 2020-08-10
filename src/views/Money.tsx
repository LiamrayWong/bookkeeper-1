import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {CategorySection} from './money/CategorySection';
import {NumberPad} from './money/NumberPad';
import {NoteSection} from './money/NoteSection';
import {TagsSection} from './money/TagsSection';



const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagsSection/>
      <NoteSection/>
      <CategorySection/>
      <NumberPad/>
    </MyLayout>
  );
}

export {Money};