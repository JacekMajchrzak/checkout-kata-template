// @flow
import {CheckOut,PriceRule,SpecialRule} from '../src/CheckOut';
import {ShopItems} from '../src/ShopItems';
import chai from "chai";
const expect = chai.expect;
declare var describe: any;
declare var it: any;
declare var before: any;

describe("Checkout ", () => {
    describe("when item Apple was scanned", () => {
        it("should return it price", () =>{
            const priceList = [new PriceRule(ShopItems.APPLE, 10,new SpecialRule(2,15))];
            const checkout = new CheckOut(priceList);
            checkout.scan(ShopItems.APPLE);
            const sum = checkout.total();
            expect(sum).to.be.equals(10);
        })
    })

})