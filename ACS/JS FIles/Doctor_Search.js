var myAppCategory = angular.module('myAppCategory', []);
myAppCategory.controller('CategoryController', [
'$scope', function($scope) {
	
$scope.selectedGender = '';
  $scope.genders = [
	{value: 'Skin', label: 'Skin'},
	{value: 'Bones', label: 'Bones'},
	{value: 'Throat', label: 'Throat'},
	{value: 'Unknown', label: 'Unknown'}
  ];
}


]);

myAppCategory.directive('selectPickerCategory', function() {
return {
restrict: 'A',
replace: true,
  scope: {
  selected: '=?bind',
  array: '=',
  class: '='
},
link: function(scope, el, attrs) {
  var select = el.selectpicker();
  select.change(function (evt) {
	scope.selected = el.selectpicker('val');
	scope.$apply();
  });

  scope.$watch('array',function(newVal) {
		el.selectpicker('refresh');
  });
}
};
});


/* -------------------------------------------------------------------------------------------------------- */


 //var myAppCategory = angular.module('myAppCity', []);
myAppCategory.controller('CityController', [
'$scope', function($scope) {
	
$scope.selectedGender = '';
  $scope.genders = [
	{value: 'Heidelberg', label: 'Heidelberg'},
	{value: 'Mannheim', label: 'Mannheim'},
	{value: 'Berlin', label: 'Berline'},
	{value: 'Unknown', label: 'Unknown'}
  ];
}


]);

myAppCategory.directive('selectPickerCity', function() {
return {
restrict: 'A',
replace: true,
scope: {
  selected: '=?bind',
  array: '=',
  class: '='
},
link: function(scope, el, attrs) {
  var select = el.selectpicker();
  select.change(function (evt) {
	scope.selected = el.selectpicker('val');
	scope.$apply();
  });

  scope.$watch('array',function(newVal) {
		el.selectpicker('refresh');
  });
}
};
});

/* ***************************************************************************************** */

//var myAppCategory = angular.module('myAppCity', []);
myAppCategory.controller('InsuranceController', [
'$scope', function($scope) {
	
$scope.selectedGender = '';
  $scope.genders = [
	{value: 'AOK', label: 'AOK'},
	{value: 'TK', label: 'TK'},
	{value: 'Mawista', label: 'Mawista'},
	{value: 'Unknown', label: 'Unknown'}
  ];
}


]);

myAppCategory.directive('selectPickerInsurance', function() {
return {
restrict: 'A',
replace: true,
scope: {
  selected: '=?bind',
  array: '=',
  class: '='
},
link: function(scope, el, attrs) {
  var select = el.selectpicker();
  select.change(function (evt) {
	scope.selected = el.selectpicker('val');
	scope.$apply();
  });

  scope.$watch('array',function(newVal) {
		el.selectpicker('refresh');
  });
}
};
});
