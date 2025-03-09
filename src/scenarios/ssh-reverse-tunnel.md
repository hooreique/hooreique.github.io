---
layout: scenario.vto
title: SSH Reverse Tunneling
date: 2025-01-11T23:00:00+0900
---

### Remote host that listens on `localhost:22`:

```bash
nohup $(which sshd) -D -f /dev/null -o HostKey=~/.ssh/host_ed25519 -o Port=2211 -o PermitRootLogin=no -o PubkeyAuthentication=yes -o PasswordAuthentication=no -o KbdInteractiveAuthentication=no -o ClientAliveInterval=60 -o ClientAliveCountMax=3 > /dev/null 2>&1 & disown
```

```plaintext{label=~/.ssh/config}
Host *
  ServerAliveInterval 60
  ServerAliveCountMax 3
```

```bash{gist}
ssh -fN -R 2222:localhost:2211 -p 2345 middle_user@example.com
```

### Middle-man that listens on `example.com:2345`:

```plaintext{label=/etc/ssh/sshd_config}
GatewayPorts yes
ClientAliveInterval 60
ClientAliveCountMax 3
```

### Client that can access the middle-man through LAN:

```bash
ssh -p 2222 remote_user@192.168.0.111
```
