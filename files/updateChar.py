#!/usr/bin/env python

import re
from bs4 import BeautifulSoup
from os.path import dirname, abspath

fonts = ['Galmuri14', 'Galmuri11', 'Galmuri11-Bold', 'Galmuri11-Condensed', 'Galmuri9', 'Galmuri7', 'GalmuriMono11', 'GalmuriMono7']
chars = ['hangul', 'ksx1001', 'ksc5601', 'cp949', 'jis0201', 'jis0208', 'jis0212', 'shiftjis', 'cp932']
styles = ''

for font in fonts:
  with open(dirname(dirname(abspath(__file__))) + '/dist/' + font + '.bdf', 'rt', encoding='utf8') as f:
    fontArr = re.findall(r'^STARTCHAR U\+([\d\w]{4})', f.read(), re.MULTILINE)

    for char in chars:
      with open(dirname(abspath(__file__)) + '/charsets/' + char + '.txt', 'rt', encoding='utf8') as c:
        if char == 'hangul':
          charArr = re.findall(r'^\d{1,5}\t(?:-|[\d\w]{4})\t(?:-|[\d\w]{4})\t(?:-|[\d\w]{4})\t(?:-|[\d\w]{4})\t(?:-|[\d\w]{4})\t([\d\w]{4})', c.read(), re.MULTILINE)
        else:
          charArr = re.findall(r'^0x[\d\w]{2,4}(?:\t|\s{2})0x([\d\w]{4})', c.read(), re.MULTILINE)
        available = len(set(fontArr) & set(charArr))
        all = len(set(charArr))

        with open(dirname(dirname(dirname(abspath(__file__)))) + '/galmuri-site/charsets.html', 'rt', encoding='utf8') as h:
          bs = BeautifulSoup(h.read(), 'html.parser')
          bs.select_one('#' + font + '_' + char + '>span:first-child').string = str(available) + ' / ' + str(all)
          bs.select_one('#' + font + '_' + char + '>span:last-child').string = str(round(available / all * 100, 3)) + ' %'
          styles += '#' + font + '_' + char + '::before{width:' + str(available / all * 100) + '%}'

          with open(dirname(dirname(dirname(abspath(__file__)))) + '/galmuri-site/charsets.html', 'wt', encoding='utf8') as h:
            h.write(str(bs))

with open(dirname(dirname(dirname(abspath(__file__)))) + '/galmuri-site/charsets.html', 'rt', encoding='utf8') as h:
  bs = BeautifulSoup(h.read(), 'html.parser')
  bs.select_one('#progress').string = styles

  with open(dirname(dirname(dirname(abspath(__file__)))) + '/galmuri-site/charsets.html', 'wt', encoding='utf8') as h:
    h.write(str(bs))
