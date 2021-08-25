import operate from "../logic/operate";

describe("Should test the operate function",() =>{
    test('Should test + operation', () =>{
        let a = 1;
        let b = 2;
        expect(operate(a,b,"+")).toEqual("3");
    })

    test('Should test - operation', () =>{
        let a = 1;
        let b = 2;
        expect(operate(a,b,"-")).toEqual("-1");
    })

    test('Should test x operation', () =>{
        let a = 5;
        let b = 2;
        expect(operate(a,b,"x")).toEqual("10");
    })

    test('Should test ÷ operation', () =>{
        let a = 6;
        let b = 1;
        expect(operate(a,b,"÷")).toEqual("6");
    })

    test('Should test ÷ operation', () =>{
        let a = 5;
        let b = 3;
        expect(operate(a,b,"%")).toEqual("2");
    })

    
})