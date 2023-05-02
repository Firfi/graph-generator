import { describe, expect, it } from "vitest";
import { foobar } from "../index.js";

describe("foobar()", () => {
  describe("given two positive integers", () => {
    const first = 2;
    const second = 3;

    describe("when called", () => {
      it("returns the sum of them multiplied by 3", () => {
        expect(foobar(first, second)).toEqual((2+3)*3);
      });
    });
  });
});
