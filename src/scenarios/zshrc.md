---
layout: scenario.vto
title: .zshrc
date: 2024-11-10T21:45:02+0900
bsc: |
  export ZSH="$HOME/.oh-my-zsh"

  ZSH_THEME="hoobira"

  plugins=(
    git
    zsh-autosuggestions
  )

  source $ZSH/oh-my-zsh.sh

  source ~/song.zsh
---

```zsh{label=~/.zshrc}
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="hoobira"

plugins=(
  git
  zsh-autosuggestions
)

source $ZSH/oh-my-zsh.sh

source ~/song.zsh
```
