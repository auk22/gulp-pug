# Template style guide

###### v1.0
<br>
<br>
## 概要
<br>
このテンプレートはLP作成を楽にするために作成しました。  
１つのHTML、複数のscss、JavaScriptから作成されています。  
Gulpで以下のタスクを動かしています。
* ローカルサーバーの立ち上げ
* ブラウザ更新※
* scssのコンパイル※
* CSSの圧縮※
* JavaScriptの圧縮※
* テンプレートエンジン（EJS）からHTMLファイルの生成
* SVGをCSS用に変換
* スタイルガイド（このページのことです）の生成

###### ※のついてるタスクはファイルを更新すると、その都度発動します。
<br>
<br>
<br>

## Templateの利用手順
<br>
利用する手順は以下のとおりです。
1. [こちら](https://eole.sharepoint.com/shared_information/DocLib/Forms/AllItems.aspx?id=%2Fshared_information%2FDocLib%2Ftemplate%2Faoki_template)から**template.zip**をダウンロードして、解凍
2. 作業場所（なるべく上の階層、自分の名前のフォルダ等がおすすめ）に解凍したファイルを移動
3. コマンドプロンプトを開き`cd `と記述、ファイルをドロップ。エンターキーを押す
4. `npm install`と記入し、エンター。package.jsonで定義されたGulp等がインストールされます
5. インストール（時間がかかります）が完了したら、`gulp`と入力し、エンター。自動更新が開始
6. コーディングを初めましょう！
7. 終了する場合はCTRL + Cの後に`y`

一度`npm install`をしてしまえば、次回以降は手順3→5のみでOKです。  
フォルダ名(template)は自由に変更して構いません。
<br>
<br>
<br>

| 名前 | 概要 |
|--- |--- |
| Sass(scss)　 | 　CSSプリプロセッサ。scss記法を採用 |
| Gulp　 | 　タスクランナー。自動化ツール |
| Bulma　 | 　CSSフレームワーク(gridコンポーネントのみ) |
| FLOCSS　 | 　CSS設計 |
| aigis　 | 　スタイルガイドジェネレーター |


<br>
### SCSSファイルの見方

scssの詳細を見たい場合は各コンポーネントの右側にscssフォルダの場所が記載されているので、確認してください。


<br>
### リセットCSS

リセットCSSはressを利用しています。そのため、ユニバーサルセレクタ(*)により、全ての要素にbox-sizing:border-boxが適用されています。

<br>
### フォントサイズについて

font-sizeはルート（HTML）要素に62.5%の指定をしており、その他はremで指定しています。<br>
したがって、1rem = 10pxになります。


| 名前 | 概要 |
|--- |--- |
| Sass(scss)　 | 　CSSプリプロセッサ。scss記法を採用 |
| Gulp　 | 　タスクランナー。自動化ツール |
| Bulma　 | 　CSSフレームワーク(gridコンポーネントのみ) |
| FLOCSS　 | 　CSS設計 |
| aigis　 | 　スタイルガイドジェネレーター |
