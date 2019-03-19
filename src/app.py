import bs4
import requests

url = 'http://wellcometreeoflife.org/resources/tree-of-life-files/?sort=filetype&order=asc'

res = requests.get(url)

soup = bs4.BeautifulSoup(res.text)

links = soup.select('.cat')[0].select('li a')

text = [links[i].text.strip() for i in range(0, len(links), 3)]

links = [links[i].get('href') for i in range(0, len(links), 3)]

n = len(links)

url = 'http://wellcometreeoflife.org'

for i in range(n):
    open(text[i], 'wb').write(requests.get(url+links[i]).content)
