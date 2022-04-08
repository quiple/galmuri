#!/usr/bin/env python

import sys
import re

b = sys.argv[1]
f = sys.argv[2]

def yAxis(m):
  y = int(m.group('y'))
  h = int(m.group('h'))
  return re.sub(r'BBX (?P<w>\d+) \d+', 'BBX \g<w> ' + str(h + y), m.group()) + ('0' * len(m.group('l')) + '\n') * y

with open(b, 'rt', encoding='utf8') as before:
  mod = re.sub(r'BBX \d+ (?P<h>\d+) \d+ (?P<y>[^-0]\d*)\nBITMAP\n((?P<l>\w{2}|\w{4}|\w{6})\n)+', yAxis, before.read())

with open(f, 'wt', encoding='utf8') as after:
  after.write(mod)
