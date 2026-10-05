# ふっきんちゃんのお部屋

ふっきんちゃんの公式サイト公開版です。

公開URL: https://abschan-dayo.github.io/

## 構成

- Next.js / React / TypeScript
- GitHub Pages（GitHub Actionsで自動デプロイ）
- UTAU音源一覧、MYCOEIROINK、利用規約、リンク一覧、作品・依頼ページ
- レスポンシブ表示、ドラッグカード、ホバー、スクロール、ページ遷移アニメーション
- 音源・画像・faviconは公開サイト用にローカル同梱

## ローカル確認

```powershell
npm ci
npm run dev
```

production buildの確認:

```powershell
npm run build
```

静的出力は `out/` に生成されます。

## 更新方法

```powershell
git add .
git commit -m "変更内容"
git push
```

`main` へのpush後、GitHub Actionsが自動でビルドと公開を行います。

Wixの旧サイトは別サイトとして残しており、このリポジトリから変更しません。
