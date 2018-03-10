// @flow

interface CheckOuting {
    scan(item:Symbol): void;
    total(): number;
}

export class CheckOut implements CheckOuting {

    priceList:Array<PriceRule>;

    constructor(priceList: Array<PriceRule>){
        this.priceList = priceList;
    }

    scan(item:Symbol){

    }

    total():number{
        return 0;
    }

}

export class PriceRule {

    item:Symbol;
    price:number;
    specialRule:SpecialRule;

    constructor(item:Symbol, price:number, specialRule:SpecialRule){
        this.item = item;
        this.price = price;
        this.specialRule = specialRule;
    }

}


export class SpecialRule{

    numberOfItems:number;
    priceForAll:number;

    constructor(numberOfItems:number, priceForAll:number){
        this.numberOfItems = numberOfItems;
        this.priceForAll = priceForAll;
    }
}