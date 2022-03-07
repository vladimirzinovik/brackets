module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brack = {
    ')': '(',
    '}': '{',
    ']': '[',
    '|': '|'
  };

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];

    if (isClosedBracket(currentBracket)) {
      if (brack[currentBracket] !== stack.pop()) return false;
    } else {
      stack.push(currentBracket);
    }

  }

  function isClosedBracket(char) {
    return [')', '}', ']','|'].indexOf(char) > -1;
  }

  return stack.length === 0;
}