(function () {
    'use strict';

    angular
        .module('app.voice')
        .controller('Voice', Voice);

    Voice.$inject = ['logger', '$scope'];

    /* @ngInject */
    function Voice(logger, $scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.text = 'nothing';
        vm.title = 'Voice';
        vm.todos = [{'title':'Build a todo app', 'done':false}];
        vm.addTodo = addTodo;
        vm.clearCompleted = clearCompleted;
        vm.ready = false;
      
        $scope.startApp = function(){
          console.log('clicked');
          vm.ready = true;
          annyang.addCommands(commands);
          annyang.start();
        }
        
        var commands = {
          'new item *val': function(val){
            vm.newTodo = val;
            vm.addTodo();
            console.log(vm.text);
            $scope.$apply();
          },
          'remove item *val': function(val){
            alert('trying to remove' + val);
            vm.todos.splice(parseInt(val)-1,1);
            console.log('Removing item ' + val);
            $scope.$apply();
          }
        }
        
        
        
        $scope.timerRunning = false;
        $scope.startTimer = function (){
            $scope.$broadcast('timer-start');
            $scope.timerRunning = true;
            ion.sound.play("bell_ring");
            ion.sound.play("song", {loop: true});
            
        };
        $scope.stopTimer = function (){
            $scope.$broadcast('timer-stop');
            $scope.timerRunning = false;
            ion.sound.pause("song");
        };

        $scope.$on('timer-stopped', function (event, args) {
          if(args.minutes === 0 && args.seconds === 0){
            ion.sound.stop("song");
            ion.sound.play("bell_ring");
            console.log('time is up!');
            return;
          }
          console.log('timer-stopped args = ', args);
        });
        $scope.addTime = function () {
            $scope.$broadcast('timer-add-cd-seconds', 60);
        }
        
        function addTodo(){
          vm.todos.push({'title':vm.newTodo, 'done':false});
          vm.newTodo = '';
        }
        
        function clearCompleted(){
          vm.todos = vm.todos.filter(function(item){
            return !item.done;
          })
        }
        
      
        ion.sound({
            sounds: [
                {name: "bell_ring"},
                {name: "song"}
            ],
            path: "../content/sounds/",
            preload: true,
            volume: 1.0
        });
      
        activate();

        function activate() {
            logger.info('Activated Voice View');
        }
    }
})();