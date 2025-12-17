---
layout: scenario.vto
title: Extracting CA for macOS
date: 2025-12-17T10:30:00+0900
---

```bash{gist label=extract-ca.bash}
mkdir -p ~/.config/ssl

# System Root CA
security find-certificate -a -p \
  /System/Library/Keychains/SystemRootCertificates.keychain \
  > ~/.config/ssl/cacert.pem

# Login 키체인
security find-certificate -a -p \
  ~/Library/Keychains/login.keychain-db \
  >> ~/.config/ssl/cacert.pem
```
