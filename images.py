import bs4
import requests

url = 'http://wellcometreeoflife.org/resources/tree-of-life-files/?sort=filetype&order=asc'

res = requests.get(url)

soup = bs4.BeautifulSoup(res.text, features="html.parser")

links = soup.select('.cat')[0].select('li a')

texts = soup.select('.cat')[0].select('li p')

text = [texts[i].text.strip() for i in range(0, len(texts), 2)]

links = [links[i].get('href') for i in range(0, len(links), 3)]

n = len(links)

url = 'http://wellcometreeoflife.org'

for i in range(n):
    print('Downloading', text[i])
    open('images/'+text[i]+'.jpg', 'wb').write(requests.get(url+links[i]).content)
