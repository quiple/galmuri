#!/usr/bin/env python

import sys
import re

b = sys.argv[1]
f = sys.argv[2]

with open(b, 'rt', encoding='utf8') as before:
  mod = re.findall(r'FONT_VERSION\s(\d+\.\d+\.\d+)', before.read())

with open(f, 'rt', encoding='utf8') as after:
  ver = re.sub(r'"version": "(\d+\.\d+\.\d+)"', '"version": "' + mod[0] + '"', after.read())

with open(f, 'wt', encoding='utf8') as write:
  write.write(ver)
