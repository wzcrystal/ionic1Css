/**
 * Created by crystal on 2017/8/17.
 */

angular.module('myApp',['ionic'])
    .config(config);

config.$inject = ['$stateProvider','$urlRouterProvider'];

    function config($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('cssList', {     //主页
                url: '/cssList',
                templateUrl: 'pages/cssList.html',
                controller:'appCtrl',
                controllerAs:'vm'
            })
            .state('header',{       //头部
                url: '/header',
                templateUrl: 'pages/header/header.html'
            })
            .state('headerBtn',{
                url: '/headerBtn',
                templateUrl: 'pages/header/headerBtn.html'
            })
            .state('subHeader',{
                url: '/subHeader',
                templateUrl: 'pages/header/subHeader.html'
            })
            .state('content',{      //内容
                url: '/content',
                templateUrl: 'pages/content/content.html'
            })
            .state('footer',{       //底部
                url: '/footer',
                templateUrl: 'pages/footer/footer.html'
            })
            .state('footerBtn',{
                url: '/footerBtn',
                templateUrl: 'pages/footer/footerBtn.html'
            })
            .state('subFooter',{
                url: '/subFooter',
                templateUrl: 'pages/footer/subFooter.html'
            })
            .state('generalButton',{        //按钮
                url: '/generalButton',
                templateUrl: 'pages/button/generalButton.html'
            })
            .state('navButton',{
                url: '/navButton',
                templateUrl: 'pages/button/navButton.html'
            })
            .state('generalList',{      //列表
                url: '/generalList',
                templateUrl: 'pages/list/generalList.html'
            })
            .state('dividerList',{
                url: '/dividerList',
                templateUrl: 'pages/list/dividerList.html'
            })
            .state('iconList',{
                url: '/iconList',
                templateUrl: 'pages/list/iconList.html'
            })
            .state('insetList',{
                url: '/insetList',
                templateUrl: 'pages/list/insetList.html'
            })
            .state('avatarList',{
                url: '/avatarList',
                templateUrl: 'pages/list/avatarList.html'
            })
            .state('thumbnailList',{
                url: '/thumbnailList',
                templateUrl: 'pages/list/thumbnailList.html'
            })
            .state('generalCard',{      //卡片
                url: '/generalCard',
                templateUrl: 'pages/card/generalCard.html'
            })
            .state('headFooterCard',{
                url: '/headFooterCard',
                templateUrl: 'pages/card/headFooterCard.html'
            })
            .state('listCard',{
                url: '/listCard',
                templateUrl: 'pages/card/listCard.html'
            })
            .state('imageCard',{
                url: '/imageCard',
                templateUrl: 'pages/card/imageCard.html'
            })
            .state('cardCase',{
                url: '/cardCase',
                templateUrl: 'pages/card/cardCase.html'
            })
            .state('generalForm',{      //表单
                url: '/generalForm',
                templateUrl: 'pages/forms/generalForm.html'
            })
            .state('floatForm',{
                url: '/floatForm',
                templateUrl: 'pages/forms/floatForm.html'
            })
            .state('listForm',{
                url: '/listForm',
                templateUrl: 'pages/forms/listForm.html'
            })
            .state('iconForm',{
                url: '/iconForm',
                templateUrl: 'pages/forms/iconForm.html'
            })
            .state('headForm',{
                url: '/headForm',
                templateUrl: 'pages/forms/headForm.html'
            })
            .state('toggle',{      //切换开关
                url: '/toggle',
                templateUrl: 'pages/forms/toggle.html'
            })
            .state('checkbox',{      //复选框
                url: '/checkbox',
                templateUrl: 'pages/forms/checkbox.html'
            })
            .state('radio',{      //单选框
                url: '/radio',
                templateUrl: 'pages/forms/radio.html'
            })
            .state('rang',{      //滑块
                url: '/rang',
                templateUrl: 'pages/forms/rang.html'
            })
            .state('select',{      //选择器
                url: '/select',
                templateUrl: 'pages/forms/select.html'
            })
            .state('iconTab',{      //tab
                url: '/iconTab',
                templateUrl: 'pages/tab/iconTab.html'
            })
            .state('topIconTab',{
                url: '/topIconTab',
                templateUrl: 'pages/tab/topIconTab.html'
            })
            .state('leftIconTab',{
                url: '/leftIconTab',
                templateUrl: 'pages/tab/leftIconTab.html'
            })
            .state('stripedTab',{
                url: '/stripedTab',
                templateUrl: 'pages/tab/stripedTab.html'
            })
            .state('col',{    //col
                url: '/col',
                templateUrl: 'pages/col/col.html'
            });

        //进入app默认进入登录页
        $urlRouterProvider.otherwise('/cssList');
    }


