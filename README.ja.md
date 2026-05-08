# bin2bas

[English](README.md)

バイナリファイルを BASIC の `POKE` 行に変換します。

出力はアドレス `#700` から始まり、1行あたり32バイトずつ出力します。
16進アドレスは大文字で出力します。

Fork元: [bas2bin_for_IchigoJam](https://github.com/taisukef/bas2bin_for_IchigoJam)

## 使い方

```sh
deno run --allow-read bin2bas.js [bin file]
```

コマンドとしてインストールできます。

```sh
deno install --global --allow-read -n bin2bas bin2bas.js
```

インストール後は直接実行できます。

```sh
bin2bas [bin file]
```

## オプション

```sh
deno run --allow-read bin2bas.js --offset n [bin file]
```

`--offset n` を指定すると、バイナリファイルの先頭 `n` バイトを読み飛ばしてから変換します。

## 例

```sh
deno run --allow-read bin2bas.js sample.bin
```

出力:

```txt
10 POKE#700,1,2,255,0,16
```
