"""
Prints a list of all available future Wordle answers.

Contirbuted by josephwu273 (https://github.com/josephwu273)
"""


import requests
import datetime

def get_wordle(d):
    url = f"https://www.nytimes.com/svc/wordle/v2/{date:%Y-%m-%d}.json"
    response = requests.get(url).json()
    try:
        return response["solution"]
    except KeyError:
        return ""

date = datetime.date.today()
while True:
    r = get_wordle(date)
    print(f"{date}: {r}")
    date += datetime.timedelta(days=1)
    if not r:
        break