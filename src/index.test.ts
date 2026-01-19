import { test , expect} from "vitest";
import { make_fraction} from "./index.js";
import type { Fraction } from "./index.js";
 
test("check make_fraction", () => {
	//41089/41625=0.987123123...
	expect(make_fraction("987","123",10)).toStrictEqual({
		numerator:41089 ,
		denominator: 41625
	});

	expect(make_fraction("009","123",10)).toStrictEqual({
		numerator: 1519,
		denominator: 166500
	});

	expect(make_fraction("987","01",10)).toStrictEqual({
		numerator: 97723,
		denominator: 99000,
	});

	expect(make_fraction("0a","bc",16)).toStrictEqual({
		numerator: 1369,
		denominator: 32640,
	});

});
