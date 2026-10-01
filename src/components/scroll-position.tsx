'use client';

import {useEffect,useState} from 'react';

export default function ScrollPosition(){
  const [progress,setProgress]=useState(0);
  const [visible,setVisible]=useState(false);
  useEffect(()=>{
    const update=()=>{
      const max=document.documentElement.scrollHeight-window.innerHeight;
      const next=max>0?Math.min(1,Math.max(0,window.scrollY/max)):0;
      setProgress(next);
      setVisible(window.scrollY>110);
    };
    update();
    window.addEventListener('scroll',update,{passive:true});
    window.addEventListener('resize',update);
    return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update)};
  },[]);
  return <div className={'scroll-position'+(visible?' is-visible':'')} aria-hidden="true">
    <span className="scroll-position-label">PAGE</span>
    <div className="scroll-position-track"><i style={{height:Math.max(8,progress*100)+'%'}}/></div>
    <b>{String(Math.round(progress*100)).padStart(2,'0')}%</b>
  </div>;
}

