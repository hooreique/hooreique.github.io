---
layout: scenario.vto
title: Vimatic Config
date: 2024-11-20T20:12:08+0900
bsc: |
  {
    "keymaps": {
      "a": { "type": "follow.start", "newTab": false },
      "<S-Esc>": { "type": "addon.toggle.enabled" }
    },
    "search": {
      "default": "google",
      "engines": {
        "google": "https://google.com/search?q={}"
      }
    },
    "properties": {
      "hintchars": "abcdefghijklmnopqrstuvwxyz",
    "smoothscroll": false,
    "complete": "sbh",
    "colorscheme": "system"
    },
    "blacklist": [
    ],
    "styles": {
      "hint": {
        "background-color": "yellow",
        "border": "1px solid gold",
        "font-weight": "bold",
        "font-size": "12px",
        "color": "black"
      },
      "console": {
        "font-family": "monospace",
        "font-size": "12px"
      }
    }
  }
---

```json{label=json}
{
  "keymaps": {
    "a": { "type": "follow.start", "newTab": false },
    "<S-Esc>": { "type": "addon.toggle.enabled" }
  },
  "search": {
    "default": "google",
    "engines": {
      "google": "https://google.com/search?q={}"
    }
  },
  "properties": {
    "hintchars": "abcdefghijklmnopqrstuvwxyz",
    "smoothscroll": false,
    "complete": "sbh",
    "colorscheme": "system"
  },
  "blacklist": [
  ],
  "styles": {
    "hint": {
      "background-color": "yellow",
      "border": "1px solid gold",
      "font-weight": "bold",
      "font-size": "12px",
      "color": "black"
    },
    "console": {
      "font-family": "monospace",
      "font-size": "12px"
    }
  }
}
```
