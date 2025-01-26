---
layout: scenario.vto
title: SSH Reverse Tunneling
date: 2025-01-11T23:00:00+0900
bsc: |
  ssh -fN -R 2222:localhost:22 -p 2345 middle_user@example.com
---

### Remote host that listens on `localhost:22`:

```plaintext{label=~/.ssh/config}
Host *
  ServerAliveInterval 60
  ServerAliveCountMax 3
```

```bash
ssh -fN -R 2222:localhost:22 -p 2345 middle_user@example.com
```

### Middle-man that listens on `example.com:2345`:

```plaintext{label=/etc/ssh/sshd_config}
GatewayPorts yes
ClientAliveInterval 60
ClientAliveCountMax 3
```

### Client that can access the middle-man through LAN:

```bash
TERM=xterm-256color ssh -p 2222 remote_user@192.168.0.111
```
