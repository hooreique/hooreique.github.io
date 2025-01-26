---
layout: scenario.vto
title: song.zsh
date: 2024-11-10T09:50:50+0900
bsc: |
  source ~/profile.sh

  export EDITOR='nvim'
  export VISUAL='nvim'

  alias se='EDITOR=$(which nvim) sudoedit'
  alias nd="nix develop --command sh -c 'SHELL=$(which zsh) nvim'"
  alias ns="nix-shell --run 'SHELL=$(which zsh) nvim'"
  alias notes="mkdir -p ~/notes && nvim -c 'cd ~/notes | Oil'"
  alias todo="mkdir -p ~/todo && nvim -c 'cd ~/todo | Oil'"

  # \\r\\n -> \\n (dos2unix)
  alias d2u="sed 's/\\\\r$//'"
  # / -> \\
  alias s2b="sed 's/\\\\//\\\\\\\\/g'"
  # \\ -> /
  alias b2s="sed 's/\\\\\\\\/\\\\//g'"

  # Final New Line (for \\n not \\r\\n)
  alias fnl="perl -0777 -pe 's/\\\\n*\\$/\\\\n/'"

  # Colemak stuff
  alias cukas='clear'
  alias kxlf='exit'

  # brew
  eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

  # fzf
  source <(fzf --zsh)

  # zoxide
  eval "$(zoxide init zsh)"
---

```zsh{label=~/song.zsh}
source ~/profile.sh

export EDITOR='nvim'
export VISUAL='nvim'

alias se='EDITOR=$(which nvim) sudoedit'
alias nd="nix develop --command sh -c 'SHELL=$(which zsh) nvim'"
alias ns="nix-shell --run 'SHELL=$(which zsh) nvim'"
alias notes="mkdir -p ~/notes && nvim -c 'cd ~/notes | Oil'"
alias todo="mkdir -p ~/todo && nvim -c 'cd ~/todo | Oil'"

# \r\n -> \n (dos2unix)
alias d2u="sed 's/\\r$//'"
# / -> \
alias s2b="sed 's/\\//\\\\/g'"
# \ -> /
alias b2s="sed 's/\\\\/\\//g'"

# Final New Line (for \n not \r\n)
alias fnl="perl -0777 -pe 's/\\n*\$/\\n/'"

# Colemak stuff
alias cukas='clear'
alias kxlf='exit'

# brew
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

# fzf
source <(fzf --zsh)

# zoxide
eval "$(zoxide init zsh)"
```
