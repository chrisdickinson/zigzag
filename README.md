# zigzag

a module for [zigzag encoding](https://developers.google.com/protocol-buffers/docs/encoding#types) in JS.

```javascript

var zz = require('zigzag')

zz.encode32(3)

zz.decode32(3)

zz.encode64high(lowint, highint)
zz.encode64low(lowint, highint)

```

## API

#### zz.encode32(number) -> encoded integer
#### zz.encode64low(lowint, highint) -> encoded integer
#### zz.encode64high(lowint, highint) -> encoded integer

encodes an integer using zigzag encoding. for >32bit values, use `encode64{low,high}` to
get the constituent int32 values.

#### zz.decode32(number) -> decoded integer
#### zz.decode64low(lowint, highint) -> decoded integer
#### zz.decode64high(lowint, highint) -> decoded integer

decodes a zigzag-encoded integer. for >32bit values, use `decode64{low,high}` to get
the constituent int32 values.

# license

MIT
