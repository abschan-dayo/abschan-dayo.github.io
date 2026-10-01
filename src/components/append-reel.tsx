'use client';

import Link from 'next/link';
import {TextStream} from '@/components/block/text-stream';
import {local} from '@/lib/path';

const appends=['-通常-','-ひそひそ低-','-ひそひそ-','-大暴れ-','-可愛-','-Soft-'];
const appendLinks=['normal','whisper-low','whisper','wild','cute','soft'].map(id=>local('/voices/#voice-'+id));

export default function AppendReel({compact=false}:{compact?:boolean}){
  if(compact){
    return <div className="hero-append-reel" aria-label="ふっきんちゃんのアペンド">
      <TextStream items={appends} hrefs={appendLinks} prefix="UTAU APPENDS" height="500px" fontSize="clamp(1.15rem, 2vw, 1.7rem)" className="append-reel"/>
    </div>;
  }
  return <section className="section append-section" aria-labelledby="append-heading">
    <div className="section-head"><div><span className="eyebrow">02 — APPEND COLLECTION</span><h2 id="append-heading">ふっきんちゃんのアペンド</h2></div><Link href="/voices/">音源一覧を見る →</Link></div>
    <div className="append-reel-panel"><TextStream items={appends} hrefs={appendLinks} prefix="ABSCHAN / UTAU APPENDS" height="300px" fontSize="clamp(2rem, 7vw, 4.5rem)" className="append-reel"/></div>
  </section>;
}

