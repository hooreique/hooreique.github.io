---
layout: scenario.vto
title: init.zsh
date: 2024-11-10T21:45:02+0900
---

```zsh{gist label=~/init.zsh}
if [[ -d "$HOME/bin" ]]; then
  export PATH="$PATH:$HOME/bin"
fi

if [[ -f /mnt/c/Program\ Files/Microsoft\ VS\ Code/bin/code ]]; then
  export PATH=$PATH:/mnt/c/Program\ Files/Microsoft\ VS\ Code/bin
fi

if [[ -d /mnt/c/bin4wsl ]]; then
  export PATH=$PATH:/mnt/c/bin4wsl
fi

if [[ -f /mnt/c/bin4wsl/win32yank.exe ]]; then
  alias clip=win32yank.exe
  alias clipo="win32yank.exe -o | sed 's/\\r$//'"
  alias clipi="win32yank.exe -o | sed 's/\\r$//' | win32yank.exe -i"
fi

# \r\n -> \n (dos2unix)
alias d2u="sed 's/\\r$//'"
# / -> \
alias s2b="sed 's/\\//\\\\/g'"
# \ -> /
alias b2s="sed 's/\\\\/\\//g'"
# Final New Line (for \n not \r\n)
alias fnl="perl -0777 -pe 's/\\n*\$/\\n/'"
```
