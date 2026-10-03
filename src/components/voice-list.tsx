'use client';
import Link from 'next/link';
import pages from '@/data/pages.json';
import {DraggableMarquee} from './block/draggable-marquee';
import {local} from '@/lib/path';
import audio from '@/data/audio.json';

const page=pages.find(item=>item.slug==='voices')!;
const names=['ひそひそ低','大暴れ','通常','ひそひそ','可愛','Soft','おーなーくん'];
const blockIds=['comp-lrzzxjfi','comp-lrzzxjfv','comp-lrzzxjg31','comp-lrzzy70d','comp-lrzzy70p','comp-lx3b15uy1','comp-mln56fj316'];
const groups=[{title:'男声',indices:[2,0,5,1]},{title:'女声',indices:[4,3]},{title:'管理音源',indices:[6]}];
const settingLines=page.blocks.slice(1,3).flatMap(block=>block.paragraphs);
const profileSettings=settingLines.slice(0,7).map(text=>{
  const clean=text.replace(/^・/,'');
  const [label,...rest]=clean.split('：');
  let value=rest.join('：');
  return {label,value};
});
const profileNotes=settingLines.slice(7);

export default function VoiceList(){
  return <>
    <div className="catalog-intro">
      <p>男声、女声の音源があります。<br/><a className="usage-report-link" href="https://x.com/search?q=%23%E3%81%B5%E3%81%8D%E3%81%B5%E3%81%8D%E8%A6%8B%E3%81%9B%E3%82%8D&amp;src=typed_query" target="_blank" rel="noreferrer">#ふきふき見せろ</a> で使用報告してくださると嬉しいです！</p>
      <div className="catalog-actions"><Link className="button catalog-action-button" href="/terms/">利用規約を確認 →</Link><a className="button catalog-action-button" href={page.links[7].href}>立ち絵をダウンロード →</a></div>
    </div>
    <details className="common-settings voice-settings">
      <summary>音源共通設定</summary>
      <div className="settings-content">
        <dl className="settings-grid">{profileSettings.map(item=><div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
        <div className="settings-notes">{profileNotes.map(text=><p key={text}>{text}</p>)}</div>
      </div>
    </details>
    {groups.map(group=>{
      const visible=group.indices;
      const isOwner=group.indices[0]===6;
      return <section className="voice-group" key={group.title} aria-label={group.title}>
        <h2 className="voice-group-title">{group.title}{!isOwner&&<small className="voice-drag-hint">-ドラッグして移動-</small>}</h2>
        <DraggableMarquee draggable={!isOwner} items={visible.map(index=>({id:index,src:local(page.images[index].src)}))} speed={0} repeatCount={1} bounded throwMultiplier={4} throwFriction={0.98} maxThrowVelocity={80} className={'voice-marquee'+(isOwner?' voice-marquee-static':'')} trackClassName="voice-marquee-track" itemClassName="voice-marquee-item" label={group.title+'の音源。左右にドラッグ、または矢印キーで移動'} renderItem={item=>{
          const index=Number(item.id);
          const position=visible.indexOf(index)+1;
          const name=names[index];
          const paragraphs=page.blocks.find(block=>block.id===blockIds[index])!.paragraphs;
          return <article id={'voice-'+['whisper-low','wild','normal','whisper','cute','soft','owner'][index]} className="voice-card">
            <div className="voice-image"><img src={local(page.images[index].src)} alt={name} loading="lazy"/><span>{index===6?'管':String(position).padStart(2,'0')}</span></div>
            <div className="voice-body"><span className="eyebrow">{index===6?'管理音源':'ふっきんちゃん'}</span><h2>{index===6?name:`-${name}-`}</h2>{paragraphs.map((paragraph,i)=><p key={i}>{paragraph}</p>)}<audio controls preload="none" aria-label={name+'の試聴'} src={local(audio[index].src)}/><div className="voice-links"><a className="button primary" href={page.links[index].href}>ダウンロード →</a></div></div>
          </article>;
        }}/>
      </section>;
    })}
  </>;
}

