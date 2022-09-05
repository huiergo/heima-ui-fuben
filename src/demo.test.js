function sum(a,b){
    return a+b
}

test('求和sum',()=>{
    expect(sum(1,1)).toBe(2)
})