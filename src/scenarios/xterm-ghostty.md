---
layout: scenario.vto
title: Ghostty Term Info
date: 2025-02-05T09:10:00+0900
---

```bash{gist}
infocmp -x xterm-ghostty | ssh user@host -- tic -x -
```

이 때 원격지에서 `tic` 을 사용할 수 없다면 `ncurses` 패키지를 설치하자.
