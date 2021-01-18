Aop = {
  around: function(fnName, advice, fnObj) {
    let originalFn = fnObj[fnName]; // 기존 함수를 따로 저장
    fnObj[fnName] = function() {
      let targetContext = {}; // 잘못된 코드라는 건 알고있다. 나중에 다시 설명한다.
      advice.call(targetContext, { fn: originalFn });
    };
  },
};
