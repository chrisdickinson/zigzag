module.exports = {
    encode32:     encode32
  , decode32:     decode32
  , encode64low:  encode64low
  , encode64high: encode64high
  , decode64low:  decode64low
  , decode64high: decode64high
}

function encode32(num) {
  return (num << 1) ^ (num >> 31)
}

function decode32(num) {
  return (num >>> 1) ^ -(num & 1)
}

function encode64low(low, high) {
  return (low << 1) ^ (high >> 31)
}

function encode64high(low, high) {
 return (low >>> 31) ^ (high << 1) ^ (high >> 31)
}

function decode64low(low, high) {
  return (high << 31) ^ (low >>> 1) ^ -(low & 1)
}

function decode64high(low, high) {
  return (high >>> 1) ^ -(low & 1)
}
