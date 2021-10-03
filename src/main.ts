function checkEnding(m: string, n: string) {
    if(m.charAt(0)==n.charAt(0) || m.charAt(1)==n.charAt(1)){
        return true;
    }
    else
    return false;
  }
  console.log(checkEnding("A8", "B8"));