# bin2bas

[Japanese](README.ja.md)

Convert a binary file to BASIC `POKE` lines.

The generated output starts at address `#700`, uses 32 bytes per line, and
prints hexadecimal addresses in uppercase.

Forked from [bas2bin_for_IchigoJam](https://github.com/taisukef/bas2bin_for_IchigoJam).

## Usage

```sh
deno run --allow-read bin2bas.js [bin file]
```

Install it as a command:

```sh
deno install --allow-read -n bin2bas bin2bas.js
```

Then run it directly:

```sh
bin2bas [bin file]
```

## Options

```sh
deno run --allow-read bin2bas.js --offset n [bin file]
```

`--offset n` skips the first `n` bytes of the binary file before conversion.

## Example

```sh
deno run --allow-read bin2bas.js sample.bin
```

Output:

```txt
10 POKE#700,1,2,255,0,16
```
