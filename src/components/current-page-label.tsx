'use client';

import {usePathname} from 'next/navigation';

const labels:Record<string,string>={
  terms:'利用規約',
  about:'私について',
  voices:'UTAU音源',
  mycoe:'MY COEIROINK',
  character:'三面図',
  request:'原音設定依頼',
  works:'お手伝い',
  links:'リンク一覧'
};

export default function CurrentPageLabel(){
  const pathname=usePathname();
  const slug=pathname.split('/').filter(Boolean).at(-1);
  if(!slug||!labels[slug])return null;
  return <span className="current-page-label" aria-current="page">{labels[slug]}</span>;
}
