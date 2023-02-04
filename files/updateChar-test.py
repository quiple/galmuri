#!/usr/bin/env python

import os
import re

fonts = ['Galmuri14', 'Galmuri11', 'Galmuri11-Bold', 'Galmuri11-Condensed', 'Galmuri11JP', 'Galmuri9', 'Galmuri7']
chars = ['hangul', 'ksx1001', 'ksc5601', 'cp949', 'jis0201', 'jis0208', 'jis0212', 'shiftjis', 'cp932']

with open(os.getcwd() + '/dist/Galmuri9.bdf', 'rt', encoding='utf8') as f:
  fontArr = re.findall(r'^STARTCHAR U\+([\d\w]{4})', f.read(), re.MULTILINE)
  available = len(set(fontArr))

with open(os.getcwd() + '/files/charsets/shiftjis.txt', 'rt', encoding='utf8') as c:
  charArr = re.findall(r'^0x[\d\w]{2,4}(?:\t|\s{2})0x([\d\w]{4})', c.read(), re.MULTILINE)
  all = len(set(charArr))

print(list(set(charArr) - set(fontArr)))
