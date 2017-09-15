var app = angular.module('chatApp',['firebase']);

app.controller('ChatController', function($scope, $firebaseArray){
  var ref = firebase.database().ref().child('messgaes');
  $scope.messgaes = $firebaseArray(ref);
  $scope.send = function(){
  $scope.messgaes.$add({

    message:$scope.messageText,
    date: Date.now()
  })
}
})