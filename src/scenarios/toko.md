---
layout: scenario.vto
title: toko
date: 2025-04-29T14:25:00+0900
---

```bash{gist label=toko}
#!/usr/bin/env bash
# Usage:
# - echo 'Innovation thrives on shared curiosity.' | toko
# - toko << 'EoF' | tee output.txt
#   > Innovation thrives on shared curiosity.
#   > EoF

API_KEY=abcdefghijklmnopqrstuvwxyz

JSON=$(jq --null-input --arg text "$(cat)" '{text:[$text],target_lang:"KO"}')

curl https://api-free.deepl.com/v2/translate \
  --silent \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: DeepL-Auth-Key $API_KEY" \
  --data "$JSON" \
  | jq --raw-output .translations[].text
```
