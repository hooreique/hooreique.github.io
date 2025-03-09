---
layout: scenario.vto
title: Java Debugee Config
date: 2025-01-05T00:00:01+0900
---

```json{gist label=.vscode/launch.json}
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "java",
      "name": "Launch App",
      "request": "launch",
      "mainClass": "org.example.app.App",
      "projectName": "app"
    }
  ]
}
```
