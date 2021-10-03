function checkEnding(m: string, n: string) {
    return m.endsWith(n);
  
  }
  console.log(checkEnding("abv", "bv"));

  interface String {    
    endsWith(searchString: string, endPosition?: number): boolean;
};