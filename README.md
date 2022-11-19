# Wordle Answers Tool

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

## Website
**WARNING**: This website is outdated and no longer works. The answers are now calculated on the server side and are not available to the client.

The old website can be accessed [here](https://sbplat.github.io/wordle/).
