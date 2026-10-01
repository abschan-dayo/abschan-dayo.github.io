import pages from '@/data/pages.json';
import videos from '@/data/videos.json';
import {local} from '@/lib/path';

const page=pages.find(item=>item.slug==='works')!;
const works=[
  {nameBlock:2,descriptionBlock:3},
  {nameBlock:4,descriptionBlock:5},
  {nameBlock:6,descriptionBlock:7},
  {nameBlock:8,descriptionBlock:9},
  {nameBlock:10,descriptionBlock:11},
  {nameBlock:12,descriptionBlock:13},
  {nameBlock:14,descriptionBlock:15},
  {nameBlock:16,descriptionBlock:17}
];

function youtubeId(url:string){
  try{
    const parsed=new URL(url);
    if(parsed.hostname==='youtu.be')return parsed.pathname.slice(1);
    return parsed.searchParams.get('v')??'';
  }catch{return ''}
}

export default function WorksPage(){
  return <div className="works-page">
    <div className="page-heading"><span className="eyebrow">WORKS & SUPPORT</span><h1>お手伝いした作品</h1></div>
    <section className="works-list">{works.map((work,index)=>{
      const name=page.blocks[work.nameBlock]?.paragraphs[0]??'';
      const paragraphs=page.blocks[work.descriptionBlock]?.paragraphs??[];
      const image=page.images[index+1];
      const link=page.links[index];
      return <article className="work-row" key={name}>
        <div className="work-image"><img src={local(image.src)} alt={image.alt}/></div>
        <div>
          <span className="eyebrow">VOICE LIBRARY — {String(index+1).padStart(2,'0')}</span>
          <h2>{name}</h2>
          {paragraphs.map(text=><p key={text}>{text}</p>)}
          {link&&<a className="button primary" href={link.href} target="_blank" rel="noreferrer">{link.label} →</a>}
        </div>
      </article>;
    })}</section>
    <section className="works-videos">
      <div className="section-head"><div><span className="eyebrow">TUNING / ILLUSTRATION / MIX</span><h2>作品動画</h2></div></div>
      <div className="youtube-grid">{videos.map(video=>{
        const id=youtubeId(video.href);
        const embedHost=id==='C-h1xG__96s'?'https://www.youtube.com':'https://www.youtube-nocookie.com';
        return <article className="youtube-card" key={video.href}>
          <div className="youtube-frame"><iframe src={`${embedHost}/embed/${id}`} title={video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div>
          <h3>{video.title}</h3>
        </article>;
      })}</div>
    </section>
  </div>;
}


