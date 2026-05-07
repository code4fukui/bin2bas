#!/usr/bin/env -S deno run --allow-read

function err() {
  console.log("bin2bas {--offset n} [bin file]");
  Deno.exit(1);
}

function atol(s) {
  const m = String(s).match(/^\s*([+-]?\d+)/);
  return m ? Number.parseInt(m[1], 10) : 0;
}

if (Deno.args.length < 1) {
  err();
}

let offset = 0;
let fnbin = null;
for (let i = 0; i < Deno.args.length; i++) {
  const p = Deno.args[i];
  if (p.startsWith("-")) {
    if (p === "--offset") {
      if (i + 1 >= Deno.args.length) {
        err();
      }
      offset = atol(Deno.args[++i]);
    }
  } else {
    fnbin = p;
  }
}

if (fnbin == null) {
  err();
}

let bin;
try {
  bin = await Deno.readFile(fnbin);
} catch {
  console.log("can't open file");
  Deno.exit(1);
}

let out = "";
let address = 0x700;
let line = 10;
const start = Math.max(0, Math.trunc(offset));

for (let i = start; i < bin.length; i++) {
  const n = bin[i];
  if (address % 32 === 0) {
    out += `\n${line} POKE#${address.toString(16).toUpperCase().padStart(3, "0")}`;
    line += 10;
  }
  address++;
  out += `,${n}`;
}
out += "\n";

await Deno.stdout.write(new TextEncoder().encode(out));
