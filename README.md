# repeating-decimal
Convert repeating decimals into exact fractions.

This package provides a utility to convert numbers with repeating parts(e.g. 0.987123123123...=41089/41625) into a reduced fractional representation.

## Features

- Convert repeating decimals to fractions
- Supports arbitrary bases (2–36)
- Fully written in TypeScript
- ESM-compatible
- No external runtime dependencies

## Installation

```bash
npm install repeating-decimal 
```

## Usage
```typescript
import { make_fraction } from "repeating-decimal";

const result = make_fraction("009","123",10);

console.log(result);
// {numerator: 1519,denominator: 166500}
// 1519/166500=0.009123123...
```
