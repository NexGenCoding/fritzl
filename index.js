"use strict";

const Fritzl = require('.lib/fritzl');

var Utils = Fritzl.Utils;
var Golang = Fritzl.Golang;

Fritzl.disablePinning();
Fritzl.hookDecryption();
Fritzl.hookEncryption();
Fritzl.hookHMAC();
Fritzl.hookKeygen();
Fritzl.hookGoEncryption();

global.Fritzl = Fritzl;
global.hd = Fritzl.hd;
global.ts = Fritzl.ts;

console.log('Regex example: ' + JSON.stringify(Golang.findSymbolsByPattern(/decrypt/i), null, 1));
