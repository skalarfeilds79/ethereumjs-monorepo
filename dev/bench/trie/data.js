window.BENCHMARK_DATA = {
  "lastUpdate": 1647251195996,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64b48b06c74458c7f2bd150b3e16bb723b357221",
          "message": "vm/tests: add support for test networks with activated EIPs (#1617)\n\n* vm/tests: add support for test networks with activated EIPs\r\n\r\n* vm/tests: remove console.log\r\n\r\n* Change deprecated forCustomChain to custom\r\n\r\n* vm/tests: add extra information about activating EIPs\r\n\r\n* vm/tests: remove console.log\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-02-01T17:13:49+01:00",
          "tree_id": "cfa9bd376e03b4f30310789e1b156f9e678f3b46",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/64b48b06c74458c7f2bd150b3e16bb723b357221"
        },
        "date": 1643732290895,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14454,
            "range": "±15.83%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17504,
            "range": "±7.61%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17052,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8956,
            "range": "±19.74%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7412,
            "range": "±21.48%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 957,
            "range": "±6.93%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 196,
            "range": "±10.36%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 45.61,
            "range": "±98.62%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 19.71,
            "range": "±5.57%",
            "unit": "ops/sec",
            "extra": "38 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e83ded1e0385c4a4728a8674105eacf91bfeb8bb",
          "message": "Block -> Release: Bumped version to v3.6.1, added CHANGELOG entry, updated upstream dependency versions (#1683)",
          "timestamp": "2022-02-02T20:46:07+01:00",
          "tree_id": "72d6e8f00bb488f68aa8aa65763d669853d8b374",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e83ded1e0385c4a4728a8674105eacf91bfeb8bb"
        },
        "date": 1643831471030,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13436,
            "range": "±12.77%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 8773,
            "range": "±18.62%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15102,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14291,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5296,
            "range": "±15.61%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 466,
            "range": "±15.67%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 172,
            "range": "±6.83%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 87.99,
            "range": "±11.71%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 6.28,
            "range": "±108.20%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52aefb83451fec6731b8b826b23f7498f2877c6e",
          "message": "vm: fix keyMap iterator in blockchain test runner (#1684)\n\n* vm: fix keyMap iterator in blockchain test runner\r\n\r\n* Update packages/vm/tests/util.ts\r\n\r\n* Update packages/vm/tests/util.ts\r\n\r\n* Update packages/vm/tests/util.ts\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-02-03T11:59:07+01:00",
          "tree_id": "f5d71e502c618bb21722cf73e9a3f08432ff0606",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/52aefb83451fec6731b8b826b23f7498f2877c6e"
        },
        "date": 1643886249999,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14049,
            "range": "±17.22%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18397,
            "range": "±5.40%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17055,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8349,
            "range": "±20.11%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7910,
            "range": "±22.36%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 867,
            "range": "±7.30%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 183,
            "range": "±13.95%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 12.6,
            "range": "±192.81%",
            "unit": "ops/sec",
            "extra": "11 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.88,
            "range": "±32.60%",
            "unit": "ops/sec",
            "extra": "33 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be06be6be600186392d5c4e76bbe8f0916e0f3fa",
          "message": "VM: trying to simplify examples (#1670)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-02-03T12:44:15+01:00",
          "tree_id": "5b26d7d18ba002df5ad0beeada43162c2010ccea",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/be06be6be600186392d5c4e76bbe8f0916e0f3fa"
        },
        "date": 1643888974508,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13433,
            "range": "±13.85%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 9266,
            "range": "±18.06%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14877,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13974,
            "range": "±2.88%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 4796,
            "range": "±10.38%",
            "unit": "ops/sec",
            "extra": "24 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 524,
            "range": "±15.82%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 168,
            "range": "±11.26%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 41.36,
            "range": "±107.28%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 12.63,
            "range": "±29.94%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d9a1818f00872bd4c5eca056910eb4002c22e6e",
          "message": "vm: Check vm.DEBUG for emitting step event (#1681)\n\n* Check vm.DEBUG for emitting step event\r\n\r\n* Update packages/vm/src/evm/interpreter.ts\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-02-03T15:06:04+01:00",
          "tree_id": "48e8844236392c53ee583cb7da7912c622096e7f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3d9a1818f00872bd4c5eca056910eb4002c22e6e"
        },
        "date": 1643897425594,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14750,
            "range": "±16.80%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18898,
            "range": "±6.69%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17897,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7859,
            "range": "±19.33%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9574,
            "range": "±24.24%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 949,
            "range": "±6.22%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 194,
            "range": "±11.75%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 40.71,
            "range": "±102.65%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.43,
            "range": "±96.78%",
            "unit": "ops/sec",
            "extra": "38 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ff89e8072973a9443d8b46c2f460eec788722dd",
          "message": "vm: add guard for EIP-3607 (#1691)\n\n* add guard for EIP-3607 and tests\r\n* 3607: update minimumHardfork to chainstart, since older HFs were added (see https://github.com/ethereum/tests/blob/develop/GeneralStateTests/stEIP3607/transactionCollidingWithNonEmptyAccount_calls.json#L114)\r\n* enable EIP-3607 for blockchain tests to pass ethereum/tests\r\n* organize lines\r\n* fix comment typos\r\n* simplify stripping hex prefix from testData.lastbockhash (uses `isHexPrefixed` which should be faster than `subtr(0, 2)`)",
          "timestamp": "2022-02-04T13:40:18-08:00",
          "tree_id": "7d1a67094c2f8422132de66e6fb1d3652070f9bb",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4ff89e8072973a9443d8b46c2f460eec788722dd"
        },
        "date": 1644011226482,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13995,
            "range": "±16.78%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14143,
            "range": "±15.15%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16554,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10890,
            "range": "±18.62%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5188,
            "range": "±14.76%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 899,
            "range": "±7.14%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 176,
            "range": "±11.36%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 15.94,
            "range": "±178.83%",
            "unit": "ops/sec",
            "extra": "13 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.82,
            "range": "±28.73%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68f714921094ee7c6941c9fbbf9aacaf24838706",
          "message": "patch releases: common v2.6.2, vm v5.7.1 (#1692)\n\n* update changelog, versions, package-lock\r\n* nit: flatten if statement",
          "timestamp": "2022-02-04T16:44:19-08:00",
          "tree_id": "1b16a840996847794e64f55dab5a655ae6f5cad9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/68f714921094ee7c6941c9fbbf9aacaf24838706"
        },
        "date": 1644022137449,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14414,
            "range": "±15.93%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15281,
            "range": "±15.20%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17248,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9330,
            "range": "±20.04%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6772,
            "range": "±20.95%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 893,
            "range": "±6.98%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 188,
            "range": "±5.50%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 11.98,
            "range": "±196.88%",
            "unit": "ops/sec",
            "extra": "10 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.36,
            "range": "±22.14%",
            "unit": "ops/sec",
            "extra": "33 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b08be2c053a6c3773a6d1a0bc5bf0f9a6eb67bd",
          "message": "vm: Fix contract REVERT bug: upon creation, REVERT return data > maxCodeSize (#1700)\n\n* vm: fix contract REVERT bug\r\n* vm: cleanup revert fix\r\n* vm/tests: address review points",
          "timestamp": "2022-02-08T11:08:14-08:00",
          "tree_id": "50ba6f59ee18907e0a022e0046e4cbc0604b4a87",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/0b08be2c053a6c3773a6d1a0bc5bf0f9a6eb67bd"
        },
        "date": 1644347616025,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12839,
            "range": "±8.28%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 8765,
            "range": "±16.50%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12173,
            "range": "±3.38%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11572,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11210,
            "range": "±14.78%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 410,
            "range": "±8.94%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 91.34,
            "range": "±11.51%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 55.2,
            "range": "±21.74%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.11,
            "range": "±7.34%",
            "unit": "ops/sec",
            "extra": "36 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a49ee1ed50edaef87098c015dd67444d565cdbd",
          "message": "tx/tests: add hardforks (#1702)\n\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-02-08T14:38:11-08:00",
          "tree_id": "d053793f3a7fcb7648f9bcdf263a627e3dc11441",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1a49ee1ed50edaef87098c015dd67444d565cdbd"
        },
        "date": 1644360620266,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14230,
            "range": "±14.94%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13819,
            "range": "±13.98%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16515,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10926,
            "range": "±18.05%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5271,
            "range": "±11.46%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 898,
            "range": "±6.93%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 181,
            "range": "±11.14%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 12.72,
            "range": "±194.77%",
            "unit": "ops/sec",
            "extra": "10 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.29,
            "range": "±33.18%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa06b1aca1bba7fa74b7db3a003887484beeacad",
          "message": "vm: improve `runTx` and `evm` debug logs (#1677)",
          "timestamp": "2022-02-08T15:27:47-08:00",
          "tree_id": "a5fc8f4cadb342bbfc2cb70f3048d5683d90410b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fa06b1aca1bba7fa74b7db3a003887484beeacad"
        },
        "date": 1644363157850,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13630,
            "range": "±14.47%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10191,
            "range": "±19.80%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14458,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14209,
            "range": "±5.45%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 4420,
            "range": "±7.02%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 555,
            "range": "±21.27%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 172,
            "range": "±11.39%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 58,
            "range": "±72.22%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 14.65,
            "range": "±25.35%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4f6c11e5fcec101d3f11d072d2e16cd47c6f657",
          "message": "merge: kintsugi updates (#1565)\n\n* * Add EIP-4399: Supplant DIFFICULTY opcode with RANDOM\n* EIP-3675 changes: validate extraData does not exceed 32 bytes\n* Remove pithos files\n\n* implement updated Engine API spec\n\n* Apply suggestions from code review\n\n* add files for merge-devnet-0, small fixes to successfully sync to head\n\n* update readme, add kintsugi docker files, move log timestamp to start of log\n\n* v3 spec update: rename message field to validationError\n\n* throw proper rpc error message shape on internal error\n\n* allow ws and http on the same port\n\n* update instructions to merge-devnet-3\n\n* receiptRoot -> receiptsRoot\nfeeReceipient -> suggestedFeeReceipient\n\n* use mergeForkBlock if provided\n\n* wip: respect message ordering in forkchoiceUpdated\n\n* update instructions to latest\n\n* update docker-compose (closes #1644)\n\n* update docker-compose: use bootnode from config/el_bootnode.txt\n\n* Rename coinbase to feeRecipient as per v1.0.0-alpha.5 spec (#1659)\n\n* add preMerge hardfork to implement setting FORK_NEXT value from EIP-3675\n\n* remove mergeForkBlock logic from common (solved by preMerge hardfork)\n\n* set preMerge value to null (this is set when parsing the genesis.json file in the client)\n\n* fix getUncleCountByBlockNumber validation\n\n* update lodestar kintsugi instructions\n\n* kintsugi config update (#1682)\n\n* engine: pass feeRecipient as coinbase\n\n* vm: simplify 0x44 opcode for eip-4399\n\n* engine: temporarily comment out following message order (need to find a way to get access to the request id)\n\n* execution: only skipBlockValidation if consensus is PoA (based on comment)\n\n* client: fix tests with enabled block verification (removed hardcoded gasLimit, set timestamp based on parent block plus one)\n\n* client: add tests for new pendingBlock class\n\n* client: add two more tests to pendingBlock for increased coverage\n\n* kintsugi docker: remove extra WORKDIR, move instructions up in readme\n\n* fix root Dockerfile typo (should match version 16 above)\n\n* engine: improve while condition and getting stateRoot for executing previous blocks prior to head\n\n* turn off debug logs in command for quicker exec\n\n* remove default --logFile param (to use less space)\n\n* add missing vm changelog entry\n\n* simplify exec log post merge by removing td output (since it is constant)\n\n* clean up TODOs (message ordering removed in kiln spec, so can be removed here)\n\nCo-authored-by: g11tech <76567250+g11tech@users.noreply.github.com>",
          "timestamp": "2022-02-09T09:13:20-05:00",
          "tree_id": "e858d8bf857485f2f88d81f7c283a7f189c72515",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e4f6c11e5fcec101d3f11d072d2e16cd47c6f657"
        },
        "date": 1644416300426,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14869,
            "range": "±17.14%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20210,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18703,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7034,
            "range": "±17.85%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14041,
            "range": "±21.68%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1027,
            "range": "±5.56%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 98.33,
            "range": "±103.53%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 90.9,
            "range": "±16.18%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.64,
            "range": "±118.15%",
            "unit": "ops/sec",
            "extra": "36 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76567250+g11tech@users.noreply.github.com",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a316ec037be0f0e5e85e47046bb60ab737e96e3",
          "message": "client: move execution from full sync (#1663)\n\n* Move execution out from full sync to client\r\n* Move execution out of synchronizer\r\n* Update packages/client/lib/config.ts\r\nCo-authored-by: Ryan Ghods <ralxzryan@gmail.com>\r\n* PascalCase for SyncMode keys\r\n* refactoring how execution and services are bundled in client\r\n* rebasing onto the kintsugi merged master\r\n* lint cleanup\r\n* remove redundant condition for running execution\r\n* small nits\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-02-14T22:02:50-08:00",
          "tree_id": "218121fd2e7301e831129ed0ea6f29b430194c92",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8a316ec037be0f0e5e85e47046bb60ab737e96e3"
        },
        "date": 1644905306731,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12128,
            "range": "±7.90%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 9270,
            "range": "±18.11%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13143,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11961,
            "range": "±4.20%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10785,
            "range": "±16.62%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 469,
            "range": "±8.37%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 93.7,
            "range": "±16.35%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 83.47,
            "range": "±11.32%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.71,
            "range": "±4.17%",
            "unit": "ops/sec",
            "extra": "33 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4f34c8d668c359aa56abd984ffa69aaac4f1b08",
          "message": "Client: Geth genesis parser minor fix (#1720)",
          "timestamp": "2022-02-16T11:26:49-08:00",
          "tree_id": "c2e5b085ea21e302149af021168ccb1f81448cdb",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f4f34c8d668c359aa56abd984ffa69aaac4f1b08"
        },
        "date": 1645039902717,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15084,
            "range": "±14.64%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16902,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16182,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7916,
            "range": "±32.73%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18308,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 861,
            "range": "±7.34%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 178,
            "range": "±12.85%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 25.33,
            "range": "±143.83%",
            "unit": "ops/sec",
            "extra": "18 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.24,
            "range": "±28.24%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "paul@paulmillr.com",
            "name": "Paul Miller",
            "username": "paulmillr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe39fea857361d56cefeb8aa7c5a2900fbbc10dc",
          "message": "README: Use GitHub built-in mermaid parser (#1735)\n\nCont. #1732",
          "timestamp": "2022-02-22T21:50:51+01:00",
          "tree_id": "d3baa951884ce02a80c48e8a2db8a775e69fdaf4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fe39fea857361d56cefeb8aa7c5a2900fbbc10dc"
        },
        "date": 1645563350724,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15385,
            "range": "±15.13%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16728,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16049,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7779,
            "range": "±27.98%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18667,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 856,
            "range": "±7.22%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 178,
            "range": "±12.28%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 25.85,
            "range": "±139.20%",
            "unit": "ops/sec",
            "extra": "18 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 18.5,
            "range": "±5.83%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0354e4504e080263a20723a226655794f09812d",
          "message": "ci: fix client integration failure (#1740)\n\n* fix failing node-versions ci race condition",
          "timestamp": "2022-02-24T14:53:46-08:00",
          "tree_id": "383fc21e36dbf73ef052e107c31517e765060006",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b0354e4504e080263a20723a226655794f09812d"
        },
        "date": 1645743552954,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12650,
            "range": "±19.25%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14659,
            "range": "±5.24%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14315,
            "range": "±2.43%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7734,
            "range": "±29.89%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15510,
            "range": "±17.37%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 772,
            "range": "±6.86%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 157,
            "range": "±12.80%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 40.31,
            "range": "±102.75%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.43,
            "range": "±8.47%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "187689004283b91cb8bb929c327b388826d9c45c",
          "message": "client: improve geth genesis parse (#1741)\n\n* client: improve geth genesis parse\r\n* Add tests for extradata/timestamp chcks\r\n* update tests to use st.equals\r\n* organize client testdata into subfolders and normalize json file names\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-02-24T15:42:28-08:00",
          "tree_id": "ce3d40c868ed6bb8fe5c491cfbc6a9febb84b480",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/187689004283b91cb8bb929c327b388826d9c45c"
        },
        "date": 1645746526513,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12082,
            "range": "±8.16%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 9017,
            "range": "±29.40%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12419,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11783,
            "range": "±3.85%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 4810,
            "range": "±41.92%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 738,
            "range": "±6.78%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 160,
            "range": "±6.50%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 76.84,
            "range": "±10.36%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.42,
            "range": "±28.53%",
            "unit": "ops/sec",
            "extra": "29 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f3da02287a653497537c12b5a30a7990d0c982d",
          "message": "merge: kiln🔥🧱 updates (#1712)\n\n* engine: update to kiln specs\r\n* common: add preMerge hardfork to enum\r\nvm: add to supportedHardforks\r\n* update parse.ts to correctly infer baseFeePerGas from created block header\r\n* add kiln/devnet4/genesis.json\r\n* fix test failure, some nits",
          "timestamp": "2022-02-25T12:54:09-08:00",
          "tree_id": "9b4b9e793a4d29bab05201d5c92cf83a7cbed1b2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6f3da02287a653497537c12b5a30a7990d0c982d"
        },
        "date": 1645822799412,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11956,
            "range": "±10.09%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 9354,
            "range": "±26.84%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12756,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11948,
            "range": "±4.13%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5464,
            "range": "±34.39%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 745,
            "range": "±7.39%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 152,
            "range": "±11.73%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 38.15,
            "range": "±103.70%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 14.09,
            "range": "±12.40%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76567250+g11tech@users.noreply.github.com",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c842a973bc8058df71cda140fe0720292e1aafe1",
          "message": "client: Jwt token based auth for engine api enabled via `rpcEngineAuth` arg (#1751)\n\n* Jwt token based auth for engine api",
          "timestamp": "2022-02-27T18:18:49-08:00",
          "tree_id": "3b918b21228ea4f82ee21ff14e225f0dabd74111",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c842a973bc8058df71cda140fe0720292e1aafe1"
        },
        "date": 1646015108187,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11862,
            "range": "±7.74%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 9464,
            "range": "±20.21%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12441,
            "range": "±3.63%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11651,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5670,
            "range": "±35.07%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 707,
            "range": "±7.02%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 151,
            "range": "±11.67%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 39.44,
            "range": "±96.24%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.85,
            "range": "±28.28%",
            "unit": "ops/sec",
            "extra": "29 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f96c9ecf7c0b0e94d6882889c4b3cbf85a55da86",
          "message": "Client: Engine API tests implementation (#1727)",
          "timestamp": "2022-03-02T17:37:15-08:00",
          "tree_id": "61822bff59ba3717f6c58e6c16d6ee4b069e78a0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f96c9ecf7c0b0e94d6882889c4b3cbf85a55da86"
        },
        "date": 1646271860035,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 8056,
            "range": "±7.95%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 7323,
            "range": "±16.90%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 8375,
            "range": "±3.57%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8426,
            "range": "±2.61%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10181,
            "range": "±3.97%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 544,
            "range": "±7.75%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 116,
            "range": "±10.97%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 53.87,
            "range": "±19.80%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.4,
            "range": "±24.37%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76567250+g11tech@users.noreply.github.com",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da0c698ade645ee9bbb8896533bbd2c0b446e1dc",
          "message": "client - Add functionality to specify cors for rpc server (#1762)\n\n* Add functionality to specify cors for rpc server",
          "timestamp": "2022-03-03T13:00:43-08:00",
          "tree_id": "e26c59c952800c6afe9f9ea92e8a3b08658bf6d0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/da0c698ade645ee9bbb8896533bbd2c0b446e1dc"
        },
        "date": 1646341577435,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15244,
            "range": "±15.70%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17326,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16129,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8660,
            "range": "±28.90%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17721,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 857,
            "range": "±7.06%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 174,
            "range": "±11.51%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 23.32,
            "range": "±143.95%",
            "unit": "ops/sec",
            "extra": "17 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.96,
            "range": "±30.43%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e69612033bf03e1d7ed47ee6a388fccb36770b55",
          "message": "merge: kiln v2 updates (#1750)\n\n* update random to prevRandao\r\n* improve optimistic sync todo note\r\n* add engine_exchangeTransitionConfigurationV1\r\n* remove kintusgi folder and add wip kiln folder\r\n* update newPayload test (random -> prevRandao)\r\n* update exchangeTransitionConfiguration\r\n* add tests for exchangeTransitionConfigurationV1\r\n* only parse jwtSecret if rpcEngine && rpcEngineAuth\r\n* devnet5 instructions (#1766)\r\n* client: increase json parser size (#1769)\r\n* improve/clarify kiln readme\r\n* touch ups\r\nCo-authored-by: g11tech <76567250+g11tech@users.noreply.github.com>",
          "timestamp": "2022-03-08T13:52:52-08:00",
          "tree_id": "27859ea1406655d56a24d35d1f65bef1430dac23",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e69612033bf03e1d7ed47ee6a388fccb36770b55"
        },
        "date": 1646776692582,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12690,
            "range": "±17.01%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15308,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14428,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9181,
            "range": "±19.78%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9901,
            "range": "±65.68%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 769,
            "range": "±7.06%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 163,
            "range": "±10.91%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 28.31,
            "range": "±136.84%",
            "unit": "ops/sec",
            "extra": "25 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.34,
            "range": "±24.93%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d1fb2e52e8f8e8d05ac6b4721d0f5682b64a200",
          "message": "VM, Tx, Common: Implement EIP3860 \"limit and meter initcode\" (#1619)\n\n* vm/tests: add support for test networks with activated EIPs\r\n\r\n* vm/tests: remove console.log\r\n\r\n* tx/common: start of EIP3860 implementation\r\n\r\n* tx: add eip3860\r\n\r\n* vm: add eip3860\r\n\r\n* vm: fix eip3860 tests\r\n\r\n* vm: update eip3860 to latest spec\r\n\r\n* tx: add 3860 tests + fix\r\n\r\n* tx: move checks to util\r\n\r\n* Add test for exceeds max initcode\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-09T14:05:21+01:00",
          "tree_id": "e465a8b829c96518464544feec572d00c2743de3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8d1fb2e52e8f8e8d05ac6b4721d0f5682b64a200"
        },
        "date": 1646831417713,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15957,
            "range": "±15.27%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17626,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10459,
            "range": "±23.69%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14482,
            "range": "±20.63%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18498,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 871,
            "range": "±6.56%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 99.3,
            "range": "±85.43%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 87.54,
            "range": "±6.94%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.26,
            "range": "±27.83%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b66c38226ce078e3ccbce9cda1000cd9cf56b2bd",
          "message": "VM, Common: Complex Genesis State tests (#1757)\n\n* tests(common): complex genesis state tests added & documentation improved\r\n\r\n* chore(package.json): remove unused test script\r\n\r\n* chore(vm): trying to run transaction with custom genesis state\r\n\r\n* vm(genesis-state): activateGenesisState flag added to inject genesis state from common, tests on progress\r\n\r\n* vm(genesis-state): tests finished\r\n\r\n* vm: remove non used script\r\n\r\n* vm(genesis-state): add documentation in readme about activate genesis state flag\r\n\r\n* vm: fix link on documentation\r\n\r\n* Update packages/vm/src/index.ts\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\n\r\n* remove change in ethereum test sub module\r\n\r\n* common: documentation of genesis state init improved\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-09T14:27:06+01:00",
          "tree_id": "ee2215c0fe6ce9f96e8727d693d8dc570ff9089c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b66c38226ce078e3ccbce9cda1000cd9cf56b2bd"
        },
        "date": 1646832744555,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13190,
            "range": "±15.13%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15751,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14447,
            "range": "±2.54%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7172,
            "range": "±29.74%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18167,
            "range": "±3.43%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 826,
            "range": "±7.42%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 174,
            "range": "±10.56%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 23.32,
            "range": "±147.78%",
            "unit": "ops/sec",
            "extra": "17 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.77,
            "range": "±5.19%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samlior@foxmail.com",
            "name": "Samlior",
            "username": "samlior"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94211ced392a8652d8f44ae47b0cd217058acb46",
          "message": "trie: add verifyRangeProof (#1731)\n\n* trie: add verify range proof\r\n\r\n* trie: add test for verify range proof\r\n\r\n* trie: reduce testing time\r\n\r\n* trie: fix comment\r\n\r\n* trie: add verifyRangeProof for SecureTrie\r\n\r\n* trie: use 'instanceof' instead of 'isRawNode'\r\n\r\n* trie: specify the return types\r\n\r\n* trie: change a more explicit way when proof is null\r\n\r\n* trie: add more descriptive errors\r\n\r\n* trie: delete useless blank lines\r\n\r\n* try to resolve karma \"buffer is undefined\" error\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-09T14:55:51+01:00",
          "tree_id": "dd7b9ee232ebdad6e8a37d414d346417bd95c71b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/94211ced392a8652d8f44ae47b0cd217058acb46"
        },
        "date": 1646834478232,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12009,
            "range": "±15.37%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14150,
            "range": "±5.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12938,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10132,
            "range": "±16.89%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8821,
            "range": "±46.79%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 821,
            "range": "±6.49%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 165,
            "range": "±10.52%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 32.01,
            "range": "±122.34%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.38,
            "range": "±6.07%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Amir Ghorbanian",
            "username": "Ghorbanian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f70f169ce7e71486a1ff58690237b777d91bb167",
          "message": "devp2p: ETH-LES class refactor (#1600)\n\n* Create superclass skeleton\r\n\r\n* Fix linting issues\r\n\r\n* Extend the new superclass in ETH and LES\r\n\r\n* Transfer _version to superclass\r\n\r\n* Transfer _peer to superclass\r\n\r\n* Transfer _statusTimeoutId to superclass\r\n\r\n* Transfer getVersion() to superclass\r\n\r\n* Revert \"Transfer getVersion() to superclass\"\r\n\r\nThis reverts commit 9abb3036cde7a3bd500c50bdd12fb157e0f18773.\r\n\r\n* Transfer _version back to subclasses\r\n\r\n* Rename ExchangeProtocol superclass to Protocol and ExchangeProtocol.ts file name to protocol.ts\r\n\r\n* Put protocol-related files in a single directory\r\n\r\n* Fix broken imports\r\n\r\n* Fix linting issue\r\n\r\n* Exclude protocol.ts from code documentation generation\r\n\r\n* Transfer debug functions and properties to superclass\r\n\r\n* Fix variable name\r\n\r\n* Include types for Protocol class variables\r\n\r\n* remove duplicated methods in child classes, lint:fix\r\n\r\nCo-authored-by: ScottyPoi <66335769+ScottyPoi@users.noreply.github.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-10T09:20:56+01:00",
          "tree_id": "7fb6abc11c28dede408e7b80ed4b90526fdf84ce",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f70f169ce7e71486a1ff58690237b777d91bb167"
        },
        "date": 1646900758840,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14843,
            "range": "±13.98%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17220,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16499,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7396,
            "range": "±36.41%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18319,
            "range": "±2.92%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 833,
            "range": "±7.80%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 171,
            "range": "±12.70%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 25.47,
            "range": "±142.58%",
            "unit": "ops/sec",
            "extra": "18 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.35,
            "range": "±34.39%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76567250+g11tech@users.noreply.github.com",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "550e8b56c831ef604d988e7fa80abac9a029fce0",
          "message": "client: Kiln public testnet update (#1775)\n\n* Kiln public testnet update\r\n* updating docker\r\n* fix webpack\r\n* standardize types, normalize log output\r\n* update kiln instructions\r\n* update cli-rpc ws test to new default port of 8545\r\n* log nits\r\n* fix following along chain head, normalize chain height log outputs\r\n* bump txpool log from 10s to 20s\r\n* Add logic to handle gap between chain head and handleBlockHashes\r\n* add rpc.spec.ts file for coverage, assign opts more simply\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-10T20:20:08-08:00",
          "tree_id": "927ca47b5c626bc9ceff3e1270c76e4c5c120b4d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/550e8b56c831ef604d988e7fa80abac9a029fce0"
        },
        "date": 1646972700528,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16134,
            "range": "±16.54%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18252,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15677,
            "range": "±11.32%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8442,
            "range": "±33.99%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18854,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 901,
            "range": "±6.52%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 104,
            "range": "±84.62%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 90.63,
            "range": "±9.54%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.07,
            "range": "±42.43%",
            "unit": "ops/sec",
            "extra": "36 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2771a8becde2c6926a8e080194932491be01895b",
          "message": "client: kiln touchups (#1778)\n\n* util/rpc.spec.ts: add more coverage cases\r\n\r\n* re-add accidentially removed test\r\n\r\n* slim withEngineMiddleware fn",
          "timestamp": "2022-03-11T10:53:42+01:00",
          "tree_id": "f8a7c6d29b73b756ece84b23c66dcd57449888f6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2771a8becde2c6926a8e080194932491be01895b"
        },
        "date": 1646992753004,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15553,
            "range": "±15.21%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17017,
            "range": "±4.27%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16884,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9519,
            "range": "±30.82%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18608,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 861,
            "range": "±9.88%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 182,
            "range": "±12.37%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 54.58,
            "range": "±82.40%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.37,
            "range": "±24.52%",
            "unit": "ops/sec",
            "extra": "36 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba916e5fdf0b5ac343100b1c8da47300a15a91b9",
          "message": "devp2p: fix per-message debug logging (#1776)\n\n* devp2p: fix debug logging\r\n\r\n* move _version to protocol class\r\n\r\n* move _send to protocol class\r\n\r\n* simplify types, set null defaults in class rather than in constructor",
          "timestamp": "2022-03-11T11:39:21+01:00",
          "tree_id": "0b630680d28a8d6a2bc231d45387073d8645d9c0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ba916e5fdf0b5ac343100b1c8da47300a15a91b9"
        },
        "date": 1646995456485,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18512,
            "range": "±12.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20266,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12882,
            "range": "±22.40%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 17761,
            "range": "±13.34%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 22140,
            "range": "±2.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1031,
            "range": "±5.24%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 114,
            "range": "±88.29%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 106,
            "range": "±6.06%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.1,
            "range": "±95.56%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5d9fb0765af7e6a176762acb548eed5033eda5f",
          "message": "common: update status fields for EIPs and hardforks (#1777)\n\n* common: update status fields for EIPs and hardforks\r\n\r\n* Common: EXPERIMENTAL -> Draft status (EIP-2315)\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-11T12:06:47+01:00",
          "tree_id": "73a0224cf326da3e3c447da9f2553812b0855c3f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b5d9fb0765af7e6a176762acb548eed5033eda5f"
        },
        "date": 1646997105736,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16159,
            "range": "±15.14%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17811,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14858,
            "range": "±13.08%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7909,
            "range": "±38.18%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18733,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 890,
            "range": "±6.97%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 177,
            "range": "±12.08%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 52.29,
            "range": "±84.76%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.6,
            "range": "±22.65%",
            "unit": "ops/sec",
            "extra": "36 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samlior@foxmail.com",
            "name": "Samlior",
            "username": "samlior"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92587f7d27034fd07c995e2e08c054be81df61d3",
          "message": "blockchain: fix updateCache (#1786)",
          "timestamp": "2022-03-14T10:41:33+01:00",
          "tree_id": "acfd4256812dd9896ded808686deb2cec77a5c60",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/92587f7d27034fd07c995e2e08c054be81df61d3"
        },
        "date": 1647251195413,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14154,
            "range": "±13.57%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16853,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15713,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7624,
            "range": "±33.66%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18159,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 854,
            "range": "±7.10%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 171,
            "range": "±11.84%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 23.83,
            "range": "±144.15%",
            "unit": "ops/sec",
            "extra": "17 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.58,
            "range": "±25.42%",
            "unit": "ops/sec",
            "extra": "34 samples"
          }
        ]
      }
    ]
  }
}