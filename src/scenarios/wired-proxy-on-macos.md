---
layout: scenario.vto
title: Wired Proxy on macOS
date: 2026-09-19T07:22:00+0900
---

```bash{gist}
# On
networksetup -setsecurewebproxystate "USB 10/100/1000 LAN" on
networksetup -setwebproxystate "USB 10/100/1000 LAN" on
defaults write com.apple.dock autohide -bool true
killall Dock
```

```bash
# Off
defaults write com.apple.dock autohide -bool false
killall Dock
networksetup -setwebproxystate "USB 10/100/1000 LAN" off
networksetup -setsecurewebproxystate "USB 10/100/1000 LAN" off
```
