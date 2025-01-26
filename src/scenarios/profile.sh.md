---
layout: scenario.vto
title: profile.sh
date: 2024-11-09T01:48:32+0900
bsc: |
  export PATH="\$PATH:/mnt/c/Program Files/Docker/Docker/resources/bin"
  export PATH="\$PATH:/mnt/c/Program Files/Microsoft VS Code/bin"
  export PATH="\$PATH:/mnt/c/Users/hmgngv/bin-wsl"
  export PATH="\$PATH:/home/song/.local/bin"

  alias pnpm='corepack pnpm'
  alias clip='win32yank.exe'
  alias clipo="win32yank.exe -o | sed 's/\\\\r$//'"
  alias clipi="win32yank.exe -o | sed 's/\\\\r$//' | win32yank.exe -i"
---

```bash{label=~/profile.sh}
export PATH="$PATH:/mnt/c/Program Files/Docker/Docker/resources/bin"
export PATH="$PATH:/mnt/c/Program Files/Microsoft VS Code/bin"
export PATH="$PATH:/mnt/c/Users/hmgngv/bin-wsl"
export PATH="$PATH:/home/song/.local/bin"

alias pnpm='corepack pnpm'
alias clip='win32yank.exe'
alias clipo="win32yank.exe -o | sed 's/\\r$//'"
alias clipi="win32yank.exe -o | sed 's/\\r$//' | win32yank.exe -i"
```
