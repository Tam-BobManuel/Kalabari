"use client"
import React from 'react';
import data from '@/assets/data/Origin.json';
import parse from 'html-react-parser';
import Back from '@/components/back';

import { Tree, TreeNode } from 'react-organizational-chart';



function Kalabari() {
  return (
    <main className='p-2 w-[95%] mx-[auto]'>
      <Back/>
      <h1>Our root: A Geneological tree</h1>
      <Tree label={<div>Mein ♂️</div>}>
        <TreeNode label={<div>Uge ♂️</div>}>
          <TreeNode label={<div>Perebokelekeibari</div>}>
            <TreeNode label={<div>{"(King)"}Berembo</div>} >
              <TreeNode label={<div>Daba</div>} >
                <TreeNode label={<div>Daba</div>}/>
              </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </Tree>
    </main>
  );
}

export default Kalabari;