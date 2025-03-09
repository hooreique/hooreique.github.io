---
layout: scenario.vto
title: Signing Commit
date: 2024-12-14T15:21:34+0900
---

```ini{gist label=~/.gitconfig}
[user]
  name = Foo
  email = bar@baz.com
  signingKey = ~/.ssh/prikey
[gpg]
  format = ssh
[commit]
  gpgSign = true
```

```plaintext{label=~/.ssh/config}
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/prikey
  IdentitiesOnly yes
```
