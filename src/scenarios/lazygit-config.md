---
layout: scenario.vto
title: Lazygit Config
date: 2025-01-19T19:00:00+0900
---

```yaml{gist label="~/Library/Application\ Support/lazygit/config.yml"}
# https://github.com/jesseduffield/lazygit/blob/master/docs/Config.md

# Config relating to the Lazygit UI
gui:
  # The number of lines you scroll by when scrolling the main window
  scrollHeight: 3

  # One of 'auto' (default) | 'en' | 'zh-CN' | 'zh-TW' | 'pl' | 'nl' | 'ja' | 'ko' | 'ru'
  # language: ko

  # Nerd fonts version to use.
  # One of: '2' | '3' | empty string (default)
  # If empty, do not show icons.
  nerdFontsVersion: 3

  # How things are filtered when typing '/'.
  # One of 'substring' (default) | 'fuzzy'
  filterMode: fuzzy
```
