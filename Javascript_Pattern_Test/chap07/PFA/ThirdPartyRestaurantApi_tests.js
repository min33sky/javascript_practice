describe('ThirdParty.restaurantApi() 에스팩트', () => {
  let api = ThirdParty.restaurantApi();

  describe('getRestaurantsNearConference(cuisine)', () => {
    let returnFromUnderlyingFunction = '아무거';
    let cuisine = '중화요리';

    beforeEach(() => {
      spyOn(api, 'getRestaurnatsWithinRadius').and.returnValue(
        returnFromUnderlyingFunction,
      );
    });

    it('올바른 인자로 getRastaurnatsWithinRadius를 호출한다', () => {
      api.getRestaurantsNearConference(cuisine);
      expect(api.getRestaurantsWithinRadius).toHaveBeenCalledWith(
        '울산 남구 신정로 20번길 988',
        2.0,
        cuisine,
      );
    });

    it('getRestaruantsWithinRadius로부터 받은 값을 반환한다', () => {
      var ret = api.getRestaurantsNearConference(cuisine);
      expect(ret).toBe(returnFromUnderlyingFunction);
    });
  });
});
``;
