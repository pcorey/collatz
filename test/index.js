import { expect } from "chai";
import { getCollatzCount } from "../";

describe("index", function() {

    it("works", () => {
        expect(getCollatzCount(2)).to.equal(1);
        expect(getCollatzCount(4)).to.equal(2);
        expect(getCollatzCount(8)).to.equal(3);
        expect(getCollatzCount(7)).to.equal(16);

        expect(getCollatzCount("1e1000")).to.equal(18178);

        expect(getCollatzCount("DEADBEEF", 16)).to.equal(257);
        expect(getCollatzCount("11111111DEADBEEF", 16)).to.equal(536);
    });

});
