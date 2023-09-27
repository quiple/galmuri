#!/usr/bin/env python

import sys
import re

b = sys.argv[1]
f = sys.argv[2]

with open(b, 'rt', encoding='utf8') as before:
  mod = re.findall(r'FontRevision\s+(\d\.\d{3})', before.read())

with open(f, 'wt', encoding='utf8') as after:
  ver = re.sub(r'FontRevision\s+(\d\.\d{3})', mod, after.read())
  after.write(ver)
