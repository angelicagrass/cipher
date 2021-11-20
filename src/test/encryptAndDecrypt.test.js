





describe('Tests for tokenizer', () => {

    it('TC1 WordAndDotGrammar test string: a', () => {
      const string = 'a'
      const tokenizer = new Tokenizer(wordAndDotGrammar, string)
      tokenizer.setTokenizerRules()
      tokenizer.tokenizeTheString()
      expect(tokenizer.getActiveToken().value[0]).toEqual('a')
      expect(tokenizer.getActiveToken().type).toEqual('WORD')
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
  