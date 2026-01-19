import { test , expect} from "vitest";
import { make_fraction} from "./index.js";
import type { Fraction } from "./index.js";
import type { Repeating_decimal } from "./index.js";
 
test("check make_fraction", () => {
	//41089/41625=0.987123123...
	expect(
		make_fraction(
			{
		 		integer:0,
				leading_decimal:"987",
				repeating_decimal:"123"
			},
			10
		)
	).toStrictEqual({
		numerator:41089 ,
		denominator: 41625
	});

	expect(
		make_fraction(
			{
		 		integer:0,
				leading_decimal:"009",
				repeating_decimal:"123"
			},
			10
		)
	).toStrictEqual({
		numerator: 1519,
		denominator: 166500
	});

	/*正しい値がわからないので一旦コメントアウト
	expect(
		make_fraction(
			{
		 		integer:0,
				leading_decimal:"090909",
				repeating_decimal:"123"
			},
			10
		)
	).toStrictEqual({
		numerator: 1519,
		denominator: 166500
	});
	*/

	expect(
		make_fraction(
			{
		 		integer:0,
				leading_decimal:"987",
				repeating_decimal:"10"
			},
			10
		)
	).toStrictEqual({
		numerator: 97723,
		denominator: 99000
	});

	/*正しい値がわからないので一旦コメントアウト
	expect(
		make_fraction(
			{
		 		integer:0,
				leading_decimal:"987",
				repeating_decimal:"01"
			},
			10
		)
	).toStrictEqual({
		numerator:0,
		denominator:0 
	});

	expect(
		make_fraction(
			{
		 		integer:3,
				leading_decimal:"987",
				repeating_decimal:"01"
			},
			10
		)
	).toStrictEqual({
		numerator: 0,
		denominator: 0 
	});
	*/

	expect(
		make_fraction(
			{
		 		integer:0,
				leading_decimal:"0a",
				repeating_decimal:"bc"
			},
			16
		)
	).toStrictEqual({
		numerator: 1369,
		denominator: 32640
	});

});
