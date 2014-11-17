(function () {
    'use strict';

    angular
        .module('app.run-plan')
        .controller('RunPlan', RunPlan);

    RunPlan.$inject = ['logger', '$scope', 'dataservice', '$q'];

    /* @ngInject */
    function RunPlan(logger, $scope, dataservice, $q) {
        /*jshint validthis: true */
        var vm = this;
        
        vm.race = {};
        vm.pace = {
          hh: 0,
          mm: 0,
          ss: 0,
          // figure out pace - mins per mile
          total: function(hh, mm, ss, distance, conversion){
            var totalSS,
                outputMM,
                outputSS,
                length;
            
            length = (conversion === 'Kilometer' ? distance.metric : distance.imperial);
            
            totalSS = ((hh * 3600) + (mm * 60) + parseInt(ss)) / length;
            outputMM = Math.floor(totalSS / 60);
            outputSS = Math.floor((((totalSS / 60) % 1) * 60) *10) / 10;
            if(outputSS < 10){
              outputSS = '0' + outputSS;
            }
            return outputMM + ':' + outputSS;
          },
          minPer: ''
        };
        vm.form = {};
        vm.form.races = [];
        vm.form.conversions = ['Mile','Kilometer'];
      
        activate();
        
        // TODO: Can combine $watch into single watch?
            $scope.$watch("vm.pace.hh", function( newValue, oldValue ) {
              if ( newValue === oldValue ) {
                  return;
              }
              console.log( "$watch: hour changed." );
              vm.pace.hh = newValue;
              vm.pace.minPer = vm.pace.total(vm.pace.hh, vm.pace.mm, vm.pace.ss, vm.selectedRace.distance, vm.form.conversion);
            });
      
        
            $scope.$watch("vm.pace.mm", function( newValue, oldValue ) {
              if ( newValue === oldValue ) {
                  return;
              }
              console.log( "$watch: minutes changed." );
              vm.pace.mm = newValue;
              vm.pace.minPer = vm.pace.total(vm.pace.hh, vm.pace.mm, vm.pace.ss, vm.selectedRace.distance, vm.form.conversion);
            });
            $scope.$watch("vm.pace.ss", function( newValue, oldValue ) {
              if ( newValue === oldValue ) {
                  return;
              }
              console.log( "$watch: seconds changed." );
              vm.pace.ss = newValue;
              vm.pace.minPer = vm.pace.total(vm.pace.hh, vm.pace.mm, vm.pace.ss, vm.selectedRace.distance, vm.form.conversion);
            });
            $scope.$watch("vm.selectedRace", function( newValue, oldValue ) {
              if ( newValue === oldValue ) {
                  return;
              }
              console.log( "$watch: selected race changed." );
              vm.selectedRace = newValue;
              vm.pace.minPer = vm.pace.total(vm.pace.hh, vm.pace.mm, vm.pace.ss, vm.selectedRace.distance, vm.form.conversion);
            });
            $scope.$watch("vm.form.conversion", function( newValue, oldValue ) {
              if ( newValue === oldValue ) {
                  return;
              }
              console.log( "$watch: conversion changed." );
              vm.form.conversion = newValue;
              vm.pace.minPer = vm.pace.total(vm.pace.hh, vm.pace.mm, vm.pace.ss, vm.selectedRace.distance, vm.form.conversion);
            });
      
        function activate() {
            var promises = [getRunTypes()];
            return $q.all(promises).then(function(){
                logger.info('Activated Run Plan View');
            });  
        }
      
        function getRunTypes() {
            return dataservice.getRunTypes().then(function (data) {
                vm.form.races = data;
                vm.selectedRace = data[0];
                vm.form.conversion = vm.form.conversions[0];
                vm.pace.minPer = vm.pace.total(vm.pace.hh, vm.pace.mm, vm.pace.ss, vm.selectedRace.distance, vm.form.conversion);
                return vm.form.races;
            });
        }
    }
})();