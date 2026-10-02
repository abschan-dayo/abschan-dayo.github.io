'use client';

import AppendReel from '@/components/append-reel';
import Link from 'next/link';
import {SplitShowcase} from '@/components/block/split-showcase';
import {SmoothScroll} from '@/components/block/smooth-scroll';
import {Progress,Tilt} from '@/components/effects';
import pages from '@/data/pages.json';
import {local} from '@/lib/path';

const voices=pages.find(page=>page.slug==='voices')!;
const request=pages.find(page=>page.slug==='request')!;

export default function Home(){
  return <SmoothScroll><Progress/><main id="main">
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">WELCOME TO MY ROOM</span>
        <h1>こんにちは。<br/><span className="hero-name-line"><span className="hero-name-prefix">私の名前は</span> <span className="hero-name-value">ふっきんちゃん</span><span className="hero-name-suffix">です。</span></span></h1>
        <p>ようこそ、ふっきんちゃんのお部屋へ。<br/>UTAU音源、MYCOE頒布所です。<br/>原音設定の依頼も受け付けています。</p>
        <div className="actions"><Link className="button primary" href="/voices/">音源を見つける <span>→</span></Link><Link className="button about-button" href="/about/">私について <span>→</span></Link></div>
        <div className="hero-meta"><span>UTAU / MY COEIROINK</span><span>VOICE LIBRARY — 01</span></div>
      </div>
      <Tilt><div className="hero-art"><img src={local(voices.images[0].src)} alt="ふっきんちゃんのキャラクターイラスト"/><div className="hero-append-anchor"><AppendReel compact/></div><span className="art-label">ふっきんちゃん<small>VOICE / CHARACTER</small></span><span className="art-stamp">HELLO!<br/>MY VOICE,<br/>YOUR STORY.</span></div></Tilt>
    </section>
    <section className="section">
      <div className="section-head"><div><span className="eyebrow">01 — VOICE LIBRARIES</span><h2>声を、選ぼう。</h2></div><p>歌う声と、話す声。<br/>あなたの作品に合わせて。</p></div>
      <SplitShowcase className="voice-entry" items={[
        {title:<h3>UTAU</h3>,tag:'SINGING VOICE',description:'地声、裏声の基本的2種類。7種類の音源をご案内。',href:local('/voices/'),target:'_self'},
        {title:<h3>MY COEIROINK</h3>,tag:'TALKING VOICE',description:'やわらかく、ふわふわ話す私の声。',href:local('/mycoe/'),target:'_self'}
      ]}/>
    </section>
    <section className="service">
      <div className="service-image" aria-hidden="true"><img src={local(request.images[0].src)} alt=""/></div>
      <div className="service-copy">
        <span className="eyebrow">02 — CREATE TOGETHER</span>
        <h2>あなたの声も、<br/>UTAU音源に。</h2>
        <p>収録、発声のサポートから原音設定、周波数表の作成まで。<br/>UTAU音源制作全般をお手伝いします。</p>
        <Link className="button primary" href="/request/">原音設定の依頼について →</Link>
        <Link className="service-secondary" href="/works/">お手伝いした作品を見る →</Link>
      </div>
    </section>
  </main></SmoothScroll>;
}


