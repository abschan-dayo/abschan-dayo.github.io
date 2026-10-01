import type {Metadata} from 'next';
import Link from 'next/link';
import {local} from '@/lib/path';
import pages from '@/data/pages.json';
import CurrentPageLabel from '@/components/current-page-label';
import PageTransition from '@/components/page-transition';
import ScrollPosition from '@/components/scroll-position';
import './globals.css';
import './design-system.css';

export const metadata:Metadata={
  title:{default:'ふっきんちゃんのお部屋',template:'%s | ふっきんちゃんのお部屋'},
  icons:{icon:local('/favicon.png?v=3')},
  description:'UTAU音源・MY COEIROINK頒布所。原音設定の依頼も受け付けています。',
  robots:{index:false,follow:false}
};

const navigation=[
  {href:'/',label:'ホーム'},
  {href:'/terms/',label:'利用規約'},
  {href:'/about/',label:'私について'},
  {href:'/voices/',label:'UTAU音源'},
  {href:'/mycoe/',label:'MY COEIROINK'},
  {href:'/character/',label:'三面図'},
  {href:'/request/',label:'原音設定依頼'},
  {href:'/works/',label:'お手伝い'},
  {href:'/links/',label:'リンク一覧'}
];

export default function Layout({children}:{children:React.ReactNode}){
  return <html lang="ja" data-scroll-behavior="smooth"><body>
    <a className="skip" href="#main">本文へ</a><ScrollPosition/>
    <header>
      <div className="brand-area"><Link href="/" className="brand"><span className="brandmark"><img src={local('/favicon.png')} alt=""/></span><span>ふっきんちゃんのお部屋<small>VOICE & CREATION</small></span></Link><CurrentPageLabel/></div>
      <nav aria-label="メインメニュー">{navigation.map(item=><Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
    </header>
    <PageTransition>{children}</PageTransition>
    <footer>
      <div className="footer-title">ふっきんちゃんのお部屋<span>あなたの作品に、ふきの声を。</span></div>
      <div className="footer-links">{pages.map(page=><Link key={page.slug} href={'/'+page.slug+'/'}>{page.title}</Link>)}</div>
      <div className="footer-bottom"><span>©2026 abschan</span><span>試作版</span></div>
    </footer>
  </body></html>;
}






