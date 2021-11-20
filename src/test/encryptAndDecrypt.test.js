
import Transposition from '../modules/transposition/transposition.js';

describe('Tests for encrypt and decrypt', () => {

    it('TC1 Transposition test', () => {
      const fileString = 'hej'
      const method = 'e'
      const key = '312'
      const testTransposition = new Transposition(fileString, method, key)
     
      expect(testTransposition.ciphertext).toBe('jhe')
    })
  })
  

// describe('Tests for tokenizer', () => {

//     it('TC1 WordAndDotGrammar test string: a', () => {
//       const string = 'a'
//       const tokenizer = new Tokenizer(wordAndDotGrammar, string)
//       tokenizer.setTokenizerRules()
//       tokenizer.tokenizeTheString()
//       expect(tokenizer.getActiveToken().value[0]).toEqual('a')
//       expect(tokenizer.getActiveToken().type).toEqual('WORD')
//     })
