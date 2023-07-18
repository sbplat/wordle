# Wordle Answers Tool
Authored by [sbplat](https://github.com/sbplat) with contributions from [josephwu273](https://github.com/josephwu273)


## API
The NYT API can be used to retrieve the answers to the Wordle puzzle. The API can be accessed at `https://www.nytimes.com/svc/wordle/v2/{YYYY}-{MM}-{DD}.json`.

### Example
The following example retrieves the Wordle answers for the current day.
```python
import datetime
import requests

date = datetime.date.today()
url = f"https://www.nytimes.com/svc/wordle/v2/{date:%Y-%m-%d}.json"
response = requests.get(url).json()
print(f"Answer: {response['solution']}")
```
### Future Words
NYT only has about a month's worth of Wordle answers planned out. (Unlike Josh Wardle's site which had several years worth of Wordles listed in source code). To see all available Wordle solutions, open a command line in the same directory as this repo and run
```console
python get_words.py
```

## Website
**WARNING**: This website is outdated and no longer works. The answers are now calculated on the server side and are not available to the client.

The old website can be accessed [here](https://sbplat.github.io/wordle/).
