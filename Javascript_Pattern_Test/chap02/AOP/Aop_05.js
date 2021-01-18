Aop = {
  around: function(fnName, advice, fnObj) {
    let originalFn = fnObj[fnName]; // 기존 함수를 따로 저장
    fnObj[fnName] = function() {
      return advice.call(this, { fn: originalFn, args: arguments });
    };
  },
};
