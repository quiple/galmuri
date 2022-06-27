#!/usr/bin/env python

import sys
import re

b = sys.argv[1]
f = sys.argv[2]

with open(b, 'rt', encoding='utf8') as before:
  mod = re.findall(r'FontRevision\s+(\d\.\d{3})', before.read())

with open(f, 'rt', encoding='utf8') as after:
  ver = re.sub(r'"version": "(\d+\.\d+\.\d+)"', '"version": "' + mod[0][:4] + '.' + mod[0][-1:] + '"', after.read())

with open(f, 'wt', encoding='utf8') as write:
  write.write(ver)
