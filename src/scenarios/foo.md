---
layout: scenario.vto
title: foo code
date: 2024-12-01T22:00:00+0900
custom:
  primaryCode:
    label: foo.lua
    language: lua
    content: |
      local foo = 'foo'
      return { foo = foo }
---

# foo

foo.lua 를 작성해봅시다.

```lua{label=bar.lua}
local bar = 'bar'
return { bar = bar }
```

bar.lua 도 작성해봅시다.
