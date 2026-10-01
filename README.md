# ふっきんちゃんのお部屋 — GitHub Pages試作版

現行Wixサイト `https://abschandayo.wixsite.com/abschan` を読み取り、別環境に作成した試作サイトです。Wixへの更新API、編集、上書き、公開操作は行っていません。DNS変更や独自ドメイン設定も行っていません。

## 実装

- Next.js 16 / React / TypeScript / Tailwind CSS
- 9ページ：ホーム、私について、利用規約等、キャラ三面図、UTAU音源一覧、MY COEIROINK、お手伝い、原音設定依頼、リンク一覧
- UTAU7種類の説明・配布リンク・ローカル試聴音源。画像30点をローカル保存
- ObsidianUI公式のHoverImg、SplitShowcase、SmoothScrollをソースとして導入。公式レジストリの取得内容を `provenance/` に保存し、MITライセンスを同梱
- ホバー画像、公式カードのスプリング移動、なめらかなスクロール、スクロール進行バー、独自追加のスプリング式3Dチルト
- モバイル表示、キーボード操作、動きを減らす設定への対応
- 原文のプロフィール・規約を保持。ホームの見出し・導線文は新規作成。公開コンテンツの確認日：2026-10-01

## ローカル確認

Node.js 22以上で `npm ci`、`npm run dev`。静的出力は `npm run build` で `out/` に作成。

## GitHub Pages公開

GitHubアカウント・リポジトリは未指定のため、まだ公開していません。

1. 新規リポジトリを作成し、このフォルダの内容をmainブランチへ追加します。
2. リポジトリのSettings → Pages → SourceでGitHub Actionsを選択します。
3. 同梱の `.github/workflows/pages.yml` が静的ビルドを公開します。
4. GitHubが返した仮URLで、画像、試聴、配布リンク、画面幅ごとの表示を再確認します。

公開先は `https://<account>.github.io/<repository>/` です。これは書式の例で、実際の公開URLではありません。ワークフローはGitHubから取得したbase_pathを使います。CNAMEファイルは作成せず、独自ドメインを設定しません。

## 確認済み・確認範囲

静的ビルドとTypeScriptチェックが成功。ブラウザで音源検索、ひそひそ低の試聴再生、デスクトップと390px幅の表示を確認。GitHub Pages上での確認は公開後に必要です。

作品動画は既存YouTubeリンクを保持し、動画本体はコピーしていません。配布ファイルはBOOTH等の元配布先を利用します。外部配布先のログイン後のダウンロードは確認対象外です。

## 出典

内容：Wix公開サイト。ObsidianUI： https://www.obsidianui.dev/ / https://github.com/Atharvsinh-codez/ObsidianUI 。第三者のイラスト・音源などの権利は元の権利者に帰属します。
