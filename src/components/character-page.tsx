import pages from '@/data/pages.json';
import {local} from '@/lib/path';

const page=pages.find(p=>p.slug==='character')!;

export default function CharacterPage(){return <div className="character-page"><section className="character-hero"><img src={local(page.images[0].src)} alt="ふっきんちゃん"/><div className="character-hero-title"><span className="eyebrow">CHARACTER REFERENCE</span><h1>キャラ三面図</h1></div></section><section className="character-about"><div><span className="eyebrow">ABOUT THE DESIGN</span><h2>キャラ三面図について</h2><p>ふっきんちゃんの三面図を<a href="https://x.com/kameda_____">かめださん</a>に描いていただきました！</p><p>イラストを描く際の参考にしていただければ幸いです。</p><small>※この通りに必ず描く必要はありません。参考にしながら、自由に描いていただいて大丈夫です。</small></div><a className="button primary character-download" href={page.links[2].href}>三面図をダウンロード →</a></section><section className="character-sheet"><div className="section-head"><div><span className="eyebrow">FRONT / BACK / SIDE</span><h2>ふっきんちゃん 三面図</h2></div></div><a href={local(page.images[1].src)} target="_blank" rel="noreferrer"><img src={local(page.images[1].src)} alt="ふっきんちゃんの正面・背面・側面の三面図"/></a></section></div>}

