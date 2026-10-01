import pages from '@/data/pages.json';
import {local} from '@/lib/path';
import {Tilt} from '@/components/effects';

const page=pages.find(item=>item.slug==='about')!;
const tools=[
  {kind:'DAW',name:'Logic Pro',text:page.blocks[7]?.paragraphs??[]},
  {kind:'歌声合成',name:'OpenUtau',text:page.blocks[10]?.paragraphs??[]},
  {kind:'イラスト',name:'Procreate',text:page.blocks[13]?.paragraphs??[]}
];

export default function AboutPage(){
  return <div className="about-page">
    <section className="about-profile">
      <div className="about-photo"><Tilt><img src={local(page.images[0].src)} alt="ふっきんちゃん"/></Tilt></div>
      <div className="about-copy">
        <span className="eyebrow">ABOUT ME</span>
        <h1>こいつ誰？</h1>
        <p className="about-name">ふっきんちゃんといいます。</p>
        <div className="about-facts">{(page.blocks[2]?.paragraphs??[]).map(text=><span key={text}>{text}</span>)}</div>
        {(page.blocks[3]?.paragraphs??[]).map(text=><p key={text}>{text}</p>)}
      </div>
    </section>
    <section className="about-tools">
      <div className="section-head"><div><span className="eyebrow">MY CREATIVE TOOLS</span><h2>私を構成する3大ソフト達。</h2></div></div>
      <div className="about-tool-grid">{tools.map(tool=><article key={tool.name}><span>{tool.kind}</span><h3>{tool.name}</h3>{tool.text.map(text=><p key={text}>{text}</p>)}</article>)}</div>
    </section>
  </div>;
}







