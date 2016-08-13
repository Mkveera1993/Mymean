'use strict';
describe('Controller: SampleCtrl', function () {
  beforeEach(module('Mymean'));

  var SampleCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleCtrl = $controller('SampleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toBe(1);
  });

});
