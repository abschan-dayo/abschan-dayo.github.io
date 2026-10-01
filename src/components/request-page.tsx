import pages from '@/data/pages.json';
import {local} from '@/lib/path';

const page=pages.find(item=>item.slug==='request')!;
const steps=[
  {titleBlock:11,descriptionBlock:12,imageIndex:1},
  {titleBlock:13,descriptionBlock:14,imageIndex:2},
  {titleBlock:15,descriptionBlock:16,imageIndex:3},
  {titleBlock:17,descriptionBlock:18,imageIndex:4}
];

export default function RequestPage(){
  return <div className="request-page">
    <section className="request-intro">
      <div>
        <span className="eyebrow">VOICE LIBRARY SUPPORT</span>
        <h1>{page.blocks[0].paragraphs[0]}</h1>
        <p className="request-price">5,000円〜 <small>（適宜変更）</small></p>
        {page.blocks[1].paragraphs.map(text=><p key={text}>{text}</p>)}
        <a className="button primary" href="https://twitter.com/abschan_" target="_blank" rel="noreferrer">TwitterのDMで相談する →</a>
      </div>
      <img src={local(page.images[0].src)} alt={page.images[0].alt}/>
    </section>

    <section className="request-service">
      <span className="eyebrow">WHAT I CAN DO</span>
      <h2>{page.blocks[3].paragraphs[0]}</h2>
      {page.blocks[4].paragraphs.map(text=><p key={text}>{text}</p>)}
    </section>

    <section className="request-overview">
      <span className="eyebrow">WORK FLOW</span>
      <h2>{page.blocks[5].paragraphs[0]}</h2>
      {page.blocks[6].paragraphs.map(text=><p key={text}>{text}</p>)}
    </section>

    <section className="request-flow">
      {steps.map((step,index)=>{
        const image=page.images[step.imageIndex];
        const title=page.blocks[step.titleBlock].paragraphs[0];
        return <article className="request-step" key={title}>
          <div className="request-step-image"><img src={local(image.src)} alt={image.alt}/></div>
          <div>
            <span className="eyebrow">WORK FLOW</span>
            <h3>{title}</h3>
            {page.blocks[step.descriptionBlock].paragraphs.map(text=><p key={text}>{text}</p>)}
          </div>
        </article>;
      })}
    </section>
  </div>;
}


