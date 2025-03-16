---
layout: scenario.vto
title: sshd_config
date: 2025-02-05T11:03:00+0900
---

```plaintext{gist label=/etc/ssh/sshd_config.d/custom.conf}
PermitRootLogin prohibit-password

PubkeyAuthentication yes
PasswordAuthentication yes
KbdInteractiveAuthentication no

ClientAliveInterval 0
ClientAliveCountMax 3
```
