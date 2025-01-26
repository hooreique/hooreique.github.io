---
layout: scenario.vto
title: Lemonade
date: 2025-01-22T13:00:00+0900
bsc: |
  # ~/.config/lemonade.toml
  # This config is for both server and client
  host = '127.0.0.1'
  allow = '127.0.0.1'
  port = 2489
  line-ending = 'lf'
---

```toml{label=~/.config/lemonade.toml}
# ~/.config/lemonade.toml
# This config is for both server and client
host = '127.0.0.1'
allow = '127.0.0.1'
port = 2489
line-ending = 'lf'
```

```bash
#!/bin/bash
# Run lemonade server
nohup lemonade server > /dev/null 2>&1 & disown
```

```bash
#!/bin/bash
# This is server side tunneling
ssh -fN -R 2489:127.0.0.1:2489 user@host
```

```bash
#!/bin/bash
# This is client side tunneling
ssh -fN -L 2489:127.0.0.1:2489 user@host
```
