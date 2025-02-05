---
layout: scenario.vto
title: sshd_config
date: 2025-02-05T11:03:00+0900
bsc: |
  PermitRootLogin prohibit-password

  PubkeyAuthentication yes
  PasswordAuthentication yes
  KbdInteractiveAuthentication no

  ClientAliveInterval 0
  ClientAliveCountMax 3
---

```plaintext{label=/etc/ssh/sshd_config.d/custom.conf}
PermitRootLogin prohibit-password

PubkeyAuthentication yes
PasswordAuthentication yes
KbdInteractiveAuthentication no

ClientAliveInterval 0
ClientAliveCountMax 3
```
