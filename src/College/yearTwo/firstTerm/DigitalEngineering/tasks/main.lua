#!/usr/bin/env lua

local function from_binary(bin)
  assert(bin:match("^[01]+$"), "Invalid binary string")
  return tonumber(bin, 2)
end

local function to_binary(n)
  return string.format("%b", n)
end

print([[| Decimal | Binary |
| ------- | ------ |]])
for a = 0, 1 do
  for b = 0, 1 do
    for c = 0, 1 do
      for d = 0, 1 do
        for e = 0, 1 do
          for f = 0, 1 do
            local binary = string.format("%i%i%i%i%i%i", a, b, c, d, e, f)
            local number = from_binary(binary)
            print(string.format("| %-2s      | %s |", number, binary))
          end
        end
      end
    end
  end
end
