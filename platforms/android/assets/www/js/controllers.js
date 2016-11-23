angular.module('app.controllers', [])

.controller('doraemonCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('melodyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
            function listDir(path){
              window.resolveLocalFileSystemURL(path,
                function (fileSystem) {
                  var reader = fileSystem.createReader();
                  reader.readEntries(
                    function (entries) {
                      alert(entries);
                    },
                    function (err) {
                      console.log(err);
                    }
                  );
                }, function (err) {
                  console.log(err);
                }
              );
            }

}])

.controller('doremonCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
