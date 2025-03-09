---
layout: scenario.vto
title: Deno Debugee Config
date: 2025-01-05T00:00:00+0900
---

```json{gist label=.vscode/launch.json}
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-node",
      "request": "launch",
      "name": "Launch Current File",
      "runtimeExecutable": "deno",
      "runtimeArgs": [
        "run",
        "--inspect-brk",
        "--allow-all"
      ],
      "program": "${file}",
      "cwd": "${workspaceFolder}",
      "attachSimplePort": 9229
    }
  ]
}
```
