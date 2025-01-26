---
layout: scenario.vto
title: wsl.conf
date: 2024-12-08T02:02:02+0900
bsc: |
  [boot]
  systemd=true

  # https://learn.microsoft.com/en-us/windows/wsl/wsl-config#interop-settings
  [interop]
  appendWindowsPath=false
---

```ini{label=/etc/wsl.conf}
[boot]
systemd=true

# https://learn.microsoft.com/en-us/windows/wsl/wsl-config#interop-settings
[interop]
appendWindowsPath=false
```
