---
layout: scenario.vto
title: wezterm.lua
date: 2024-12-08T02:02:02+0900
bsc: |
  local wezterm = require 'wezterm'

  local config = {}

  if wezterm.config_builder then
    config = wezterm.config_builder()
  end

  config.default_prog = { '\$USERPROFILE/AppData/Local/Microsoft/WindowsApps/Microsoft.PowerShell_8wekyb3d8bbwe/pwsh.exe' }
  -- config.default_prog = { 'C:/Windows/System32/WindowsPowerShell/v1.0/powershell.exe' }
  -- config.default_domain = 'WSL:Ubuntu'
  -- config.default_prog = { 'C:/cygwin64/Cygwin.bat' }

  config.color_scheme = 'Monokai Remastered'
  config.font = wezterm.font_with_fallback {
    'JetBrainsMono NF',
    'JetBrains Mono',
    'D2Coding',
  }
  config.font_size = 11
  config.initial_cols = 120
  config.initial_rows = 32
  -- config.harfbuzz_features = { 'calt=0', 'clig=0', 'liga=0' }
  config.window_padding = { top = 0, left = 0, bottom = 0, right = 0 }

  return config
---

```lua{label=%USERPROFILE%\.config\wezterm\wezterm.lua}
local wezterm = require 'wezterm'

local config = {}

if wezterm.config_builder then
  config = wezterm.config_builder()
end

config.default_prog = { '$USERPROFILE/AppData/Local/Microsoft/WindowsApps/Microsoft.PowerShell_8wekyb3d8bbwe/pwsh.exe' }
-- config.default_prog = { 'C:/Windows/System32/WindowsPowerShell/v1.0/powershell.exe' }
-- config.default_domain = 'WSL:Ubuntu'
-- config.default_prog = { 'C:/cygwin64/Cygwin.bat' }

config.color_scheme = 'Monokai Remastered'
config.font = wezterm.font_with_fallback {
  'JetBrainsMono NF',
  'JetBrains Mono',
  'D2Coding',
}
config.font_size = 11
config.initial_cols = 120
config.initial_rows = 32
-- config.harfbuzz_features = { 'calt=0', 'clig=0', 'liga=0' }
config.window_padding = { top = 0, left = 0, bottom = 0, right = 0 }

return config
```
