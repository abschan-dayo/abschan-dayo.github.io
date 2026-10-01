import pages from '@/data/pages.json';
import {local} from '@/lib/path';

const page=pages.find(item=>item.slug==='mycoe')!;

export default function MyCoeCard(){
  return <div className="mycoe-page">
    <section className="mycoe-hero">
      <div>
        <span className="eyebrow">MY COEIROINK</span>
        <h1><small>ふっきんちゃん</small><strong>-MYCOEIROINK-</strong></h1>
        <p className="mycoe-subtitle">やわらかく、ふわふわ話す私の声。</p>
        {(page.blocks[1]?.paragraphs??[]).map(text=><p key={text}>{text}</p>)}
        <a className="button primary mycoe-download" href={page.links[0].href} target="_blank" rel="noreferrer">音声をダウンロード →</a>
      </div>
      <div className="mycoe-hero-image"><img src={local(page.images[0].src)} alt={page.images[0].alt}/></div>
    </section>
    <section className="mycoe-about">
      <div>
        <span className="eyebrow">ABOUT COEIROINK</span>
        <h2>COEIROINKについて</h2>
        <p>COEIROINKは、さまざまな声を使って文章を読み上げられる無料のAIトークソフトです。Windows・Mac・Linuxに対応し、追加した音声を作品のナレーションやキャラクターボイスなどに利用できます。</p>
        <small>音声を利用する際は、各音声とCOEIROINKの利用規約・クレジット表記をご確認ください。</small>
      </div>
      <a className="button primary coeiroink-download" href="https://coeiroink.com/download" target="_blank" rel="noreferrer">COEIROINKをダウンロード →</a>
    </section>
  </div>;
}


