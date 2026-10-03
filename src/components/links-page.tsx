'use client';

import pages from '@/data/pages.json';
import {DraggableMarquee} from './block/draggable-marquee';

const page=pages.find(item=>item.slug==='links')!;
const names=['YouTube','ニコニコ動画','Twitter / X','BOOTH','xFolio','UTALOADER(β)'];
const favicon=(href:string)=>`https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(href)}&sz=64`;

export default function LinksPage(){
  const items=page.links.map((link,index)=>({id:index,src:link.href}));
  return <div className="links-page">
    <div className="page-heading"><span className="eyebrow">FIND ME ONLINE</span><h1>リンク一覧</h1></div>
    <DraggableMarquee items={items} speed={0} repeatCount={3} bounded={false} throwMultiplier={2.2} throwFriction={0.94} maxThrowVelocity={45} className="link-marquee" trackClassName="link-marquee-track" itemClassName="link-marquee-item" label="リンクカード。左右にドラッグ、または矢印キーで移動" renderItem={item=>{
      const index=Number(item.id);
      const link=page.links[index];
      return <article className="voice-card link-voice-card">
        <div className="link-card-top"><span><img src={favicon(link.href)} alt=""/></span><b>LINK</b></div>
        <div className="voice-body"><span className="eyebrow">OFFICIAL LINK</span><h2>{names[index]??link.label}</h2><a className="button primary" href={link.href} target="_blank" rel="noreferrer">リンクを開く →</a></div>
      </article>;
    }}/>
  </div>;
}


