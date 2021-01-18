describe('Aop', () => {
  describe('Aop.around(fnName, advice, targetObj', () => {
    it('타깃 함수를 호출 시 어드바이스를 실행하도록 한다.', () => {
      let targetObj = {
        targetFn: function() {},
      };

      let executedAdvice = false;
      let advice = function() {
        executedAdvice = true;
      };

      Aop.around('targetFn', advice, targetObj);
      targetObj.targetFn();
      expect(executedAdvice).toBe(true);
    });
  });
});
