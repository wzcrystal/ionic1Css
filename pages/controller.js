/**
 * Created by crystal on 2017/8/17.
 */
angular.module('myApp')
    .controller('appCtrl',appCtrl);
appCtrl.$inject=['$state','$ionicHistory'];
function appCtrl($state,$ionicHistory){
    var vm = this;

    vm.toPage = toPage;     //页面跳转

    function toPage(page){
        $state.go(page);
    }
}