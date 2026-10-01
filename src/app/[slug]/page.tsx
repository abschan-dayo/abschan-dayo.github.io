import pages from '@/data/pages.json';
import {notFound} from 'next/navigation';
import {local} from '@/lib/path';
import VoiceList from '@/components/voice-list';
import MyCoeCard from '@/components/mycoe-card';
import CharacterPage from '@/components/character-page';
import TermsPage from '@/components/terms-page';
import AboutPage from '@/components/about-page';
import RequestPage from '@/components/request-page';
import LinksPage from '@/components/links-page';
import WorksPage from '@/components/works-page';
import {Progress} from '@/components/effects';

export function generateStaticParams(){return pages.map(page=>({slug:page.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  return {title:pages.find(page=>page.slug===slug)?.title};
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const page=pages.find(item=>item.slug===slug);
  if(!page)notFound();
  const hasImageHero=slug==='character'||slug==='terms';
  const customPage=['character','terms','about','mycoe','request','links','works'].includes(slug);

  return <>
    <Progress/>
    <main id="main" className={hasImageHero?'character-main':'detail'}>
      {!customPage&&<div className="page-heading"><span className="eyebrow">ABSCHAN&apos;S ROOM</span><h1>{page.title}</h1></div>}
      {slug==='voices'?<VoiceList/>:
       slug==='mycoe'?<MyCoeCard/>:
       slug==='character'?<CharacterPage/>:
       slug==='terms'?<TermsPage/>:
       slug==='about'?<AboutPage/>:
       slug==='request'?<RequestPage/>:
       slug==='links'?<LinksPage/>:
       slug==='works'?<WorksPage/>:
       <>
         <div className="content-layout">
           <article className="prose">{page.blocks.map((block,index)=><section key={block.id||index}>{block.paragraphs.map((text,paragraphIndex)=>text.length<35&&paragraphIndex===0?<h2 key={paragraphIndex}>{text}</h2>:<p key={paragraphIndex}>{text}</p>)}</section>)}</article>
           {page.images.length>0&&<aside className="gallery">{page.images.map((image,index)=><a key={image.src} href={local(image.src)} target="_blank" rel="noreferrer"><img src={local(image.src)} alt={image.alt} loading={index?'lazy':'eager'}/></a>)}</aside>}
         </div>
         {page.links.length>0&&<section className="resource-links"><h2>関連リンク・ダウンロード</h2>{page.links.map((link,index)=><a key={index} href={link.href} target="_blank" rel="noreferrer">{link.label}<span>→</span></a>)}</section>}
       </>}
    </main>
  </>;
}


