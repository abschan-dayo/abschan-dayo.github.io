import pages from '@/data/pages.json';
import {local} from '@/lib/path';
const page=pages.find(p=>p.slug==='terms')!;
export default function TermsPage(){return <div className="terms-page"><section className="terms-hero"><img src={local(page.images[0].src)} alt="ふっきんちゃん"/><div className="terms-hero-title"><span className="eyebrow">VOICE LIBRARY RULES</span><h1>利用規約について</h1></div></section><section className="terms-content"><span className="eyebrow">TERMS OF USE</span><h2>利用規約</h2>{page.blocks[2].paragraphs.map((text,i)=><p key={i} className={i===0?'terms-lead':'terms-rule'}>{text}</p>)}</section></div>}

