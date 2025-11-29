# bookmarklet

## Minify

```bash
read -p "Minify対象ファイル: " input_filepath
output_filepath="${input_filepath%.js}.min.js"
curl -X POST --data-urlencode "input@$input_filepath" https://www.toptal.com/developers/javascript-minifier/api/raw --output "$output_filepath"
```
