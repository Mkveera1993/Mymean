'use strict';
angular.module('Mymean').factory('Sample', ['$http',
    function ($http) {
        var urlBase = '/api/samples/';
        var dataFactory = {};
        dataFactory.addNewSample = function (sample) {
            return $http.post(urlBase, {
                'sample': sample
            });
        };

        dataFactory.getSample = function (sample_id) {
            return $http.get(urlBase + sample_id + '/');
        };
        dataFactory.getSamples = function () {
            return $http.get(urlBase + '/');
        };     

        dataFactory.updateSample = function (sample_id, sample) {
            return $http.put(urlBase + sample_id + '/', {
                'sample': sample
            });
        };

        dataFactory.deleteSample = function (sample_id) {
            return $http.delete(urlBase + sample_id + '/');
        };

        return dataFactory;
    }
]);
