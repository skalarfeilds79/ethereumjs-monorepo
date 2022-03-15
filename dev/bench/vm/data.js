window.BENCHMARK_DATA = {
  "lastUpdate": 1647344870441,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
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
        "date": 1643897455160,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16672,
            "range": "±6.56%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 14120,
            "range": "±10.90%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17719,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 17065,
            "range": "±3.48%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17455,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "75 samples"
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
        "date": 1644011062253,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20253,
            "range": "±6.60%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19555,
            "range": "±9.91%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20367,
            "range": "±2.36%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422908",
            "value": 10247,
            "range": "±15.29%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19988,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "76 samples"
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
        "date": 1644022188007,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 11410,
            "range": "±5.11%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12179,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 9416,
            "range": "±10.69%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12096,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12135,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "81 samples"
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
        "date": 1644347560082,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19639,
            "range": "±5.85%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16719,
            "range": "±10.45%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20139,
            "range": "±2.04%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19581,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13526,
            "range": "±13.93%",
            "unit": "ops/sec",
            "extra": "53 samples"
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
        "date": 1644360704289,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19450,
            "range": "±5.14%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16852,
            "range": "±9.95%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20498,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20030,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11794,
            "range": "±13.34%",
            "unit": "ops/sec",
            "extra": "47 samples"
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
        "date": 1644363147556,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 12150,
            "range": "±5.15%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11237,
            "range": "±7.57%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422907",
            "value": 12793,
            "range": "±2.68%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12719,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12748,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "81 samples"
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
        "date": 1644416322863,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16399,
            "range": "±5.98%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15048,
            "range": "±9.05%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16535,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 16129,
            "range": "±4.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 7708,
            "range": "±10.56%",
            "unit": "ops/sec",
            "extra": "35 samples"
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
        "date": 1644905335486,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 9994,
            "range": "±7.03%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11378,
            "range": "±4.06%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422907",
            "value": 8238,
            "range": "±12.81%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Block 9422908",
            "value": 9975,
            "range": "±9.18%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422910",
            "value": 10473,
            "range": "±5.12%",
            "unit": "ops/sec",
            "extra": "68 samples"
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
        "date": 1645039893756,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19292,
            "range": "±9.27%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20717,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16552,
            "range": "±15.45%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19989,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19995,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "77 samples"
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
        "date": 1645563375608,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15878,
            "range": "±9.30%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17217,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16278,
            "range": "±10.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13903,
            "range": "±14.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17190,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "76 samples"
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
        "date": 1645743570565,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 11609,
            "range": "±4.39%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11292,
            "range": "±7.14%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 11705,
            "range": "±3.16%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 11590,
            "range": "±3.13%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 9599,
            "range": "±13.41%",
            "unit": "ops/sec",
            "extra": "66 samples"
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
        "date": 1645746455486,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16851,
            "range": "±7.99%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17838,
            "range": "±2.54%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14945,
            "range": "±14.79%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18530,
            "range": "±2.25%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18115,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
        "date": 1645822769636,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15172,
            "range": "±8.16%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16470,
            "range": "±2.77%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16445,
            "range": "±2.83%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13578,
            "range": "±15.37%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16693,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "76 samples"
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
        "date": 1646015073143,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 12767,
            "range": "±5.92%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13894,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 12205,
            "range": "±11.38%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13091,
            "range": "±2.67%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12637,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "72 samples"
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
        "date": 1646271858326,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19030,
            "range": "±9.02%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20035,
            "range": "±2.12%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16981,
            "range": "±12.61%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19762,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19379,
            "range": "±2.81%",
            "unit": "ops/sec",
            "extra": "76 samples"
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
        "date": 1646341608038,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 11854,
            "range": "±3.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11636,
            "range": "±8.09%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 12189,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 10326,
            "range": "±14.40%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12169,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "80 samples"
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
        "date": 1646776668507,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19558,
            "range": "±8.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20995,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16897,
            "range": "±14.95%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20693,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20530,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "79 samples"
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
        "date": 1646831451493,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15960,
            "range": "±8.91%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17185,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15791,
            "range": "±11.05%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12772,
            "range": "±21.57%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17212,
            "range": "±3.19%",
            "unit": "ops/sec",
            "extra": "79 samples"
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
        "date": 1646832723261,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18610,
            "range": "±6.73%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19977,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15748,
            "range": "±16.98%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19249,
            "range": "±2.43%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18772,
            "range": "±4.83%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
        "date": 1646834436173,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19204,
            "range": "±8.39%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20677,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16135,
            "range": "±15.63%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20016,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19918,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "70 samples"
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
        "date": 1646900780636,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15168,
            "range": "±7.61%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16105,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 13405,
            "range": "±15.13%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15968,
            "range": "±2.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 15734,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "76 samples"
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
        "date": 1646972691672,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19158,
            "range": "±6.79%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20530,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16233,
            "range": "±17.65%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19701,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19257,
            "range": "±4.46%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
        "date": 1646992707903,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19726,
            "range": "±7.81%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20791,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16865,
            "range": "±13.79%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20110,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20014,
            "range": "±4.68%",
            "unit": "ops/sec",
            "extra": "75 samples"
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
        "date": 1646995474717,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17534,
            "range": "±7.43%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18521,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16006,
            "range": "±12.18%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18280,
            "range": "±5.33%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18492,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
        "date": 1646997089036,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19339,
            "range": "±8.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20807,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16893,
            "range": "±14.05%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20419,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19625,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
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
        "date": 1647251233217,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10830,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10324,
            "range": "±6.61%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10881,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 9409,
            "range": "±12.37%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 10725,
            "range": "±3.43%",
            "unit": "ops/sec",
            "extra": "80 samples"
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
          "id": "46e8394961fc8b2bdf54af8bc44af94621607d6a",
          "message": "Client: Mix hash added to JsonRpcBlock (#1791)",
          "timestamp": "2022-03-15T00:27:26-06:00",
          "tree_id": "b9e9d8968afaca83b1bb2b1139e920eb3fca2e69",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/46e8394961fc8b2bdf54af8bc44af94621607d6a"
        },
        "date": 1647325988348,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10984,
            "range": "±5.09%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10650,
            "range": "±6.61%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 11602,
            "range": "±2.92%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 9630,
            "range": "±12.23%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11104,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "80 samples"
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
          "id": "3b8734170ab424355531cc97dc9d719f063df346",
          "message": "client/cli: start script now accepts files with private keys (#1790)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-15T11:41:00+01:00",
          "tree_id": "c7c8553514f044666e63e0631b65fd0173ce50af",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3b8734170ab424355531cc97dc9d719f063df346"
        },
        "date": 1647341183818,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13236,
            "range": "±4.22%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12234,
            "range": "±6.87%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 13376,
            "range": "±2.92%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 11435,
            "range": "±12.32%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12789,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "75 samples"
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
          "id": "b1bf67c41c627057ebe23f244780b199886b12ec",
          "message": "client: Sync stall investigation improvements (#1781)\n\n* Sync stall investigation improvements\r\n\r\n* remove comma from logs\r\n\r\n* fixing the fetcher error handling\r\n\r\n* TODO for handling the writer error better\r\n\r\n* fetcher cleanup on error\r\n\r\n* fix test for fullsync spec\r\n\r\n* resolve the fetcher on successful run\r\n\r\n* referesh status of peer on fetcher error\r\n\r\n* stubs for server\r\n\r\n* updating the sig of connect to match with mockserver\r\n\r\n* fetcher error debug log\r\n\r\n* Handle  reorg possibility\r\n\r\n* fix fullsync test case\r\n\r\n* nits, cleanup, add peer reconnection after ban if peerpool is empty\r\n\r\n* fixing the writer as async writev was messing with order\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-15T12:05:32+01:00",
          "tree_id": "7f95f8b3ca1ee36b8221d90565b117a88048ddbf",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b1bf67c41c627057ebe23f244780b199886b12ec"
        },
        "date": 1647342701359,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17746,
            "range": "±8.50%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18880,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14559,
            "range": "±17.58%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422908",
            "value": 17882,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18342,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "71 samples"
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
          "id": "010322d80663e34844b92bbbdbbf12d150dd7be1",
          "message": "VM, Common: implement eip-3540 (EOF1) (#1719)\n\n* Add EIP json\r\n\r\n* Partial changes to enable EIp3540 and start code checks\r\n\r\n* Finish code validation checks and API tests\r\n\r\n* Move eof params to common\r\n\r\n* Code execution context updates\r\n\r\n* Add exception for invalid EOF format\r\n\r\n* Various fixes\r\n\r\n* Gate push handler changes behind EIP\r\n\r\n* Remove ethereum/tests tests\r\n\r\n* Clarify eof helper variable names\r\n\r\n* more naming clarifications\r\n\r\n* rename bytecode to container\r\n\r\n* check that section sizes are greater than 0\r\n\r\n* VM, Common: Add EIP-3670 (EOF - Code Validation) (#1743)\r\n\r\n* EIP3670 EOF1 code validation changes\r\n\r\n* Fix typos, add tests, update error EOF handler\r\n\r\n* EIP3540 tests\r\n\r\n* Lint fixes\r\n\r\n* Fix tests\r\n\r\n* Lint/uncomment tests\r\n\r\n* More adjustments to EOF1 logic\r\n\r\n* compartmentalize tests\r\n\r\n* Add checks for newly deployed contract code\r\n\r\n* Fix state test runner for specified EIPs\r\n\r\n* vm: add eip3540 tests invalid eof initcode\r\n\r\n* vm: lint\r\n\r\n* vm/tests: cleanup 3540 tests\r\n\r\n* Address feedback\r\n\r\n* lint\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-15T12:42:11+01:00",
          "tree_id": "e18329763464ddefc5df254eea16fa2ee81f5e67",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/010322d80663e34844b92bbbdbbf12d150dd7be1"
        },
        "date": 1647344869924,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 12123,
            "range": "±3.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11218,
            "range": "±10.72%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 12228,
            "range": "±3.13%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 9392,
            "range": "±16.01%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11304,
            "range": "±3.03%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      }
    ]
  }
}