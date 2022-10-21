let assert=require('chai').assert
let index=require('../index')

describe('testapp',function(){
    it('the test should return 10',function(){
        assert.equal(index(),10)
      
    })
    it('the test should return type is num',function(){
      
        assert.typeOf(index(),'number')
       
    })
    it('the test should return above 10',function(){
    
        assert.isAbove(index(),9)
    })
  
    
})