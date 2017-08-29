/*
* @Author: ASUS
* @Date:   2017-08-26 11:29:49
* @Last Modified by:   ASUS
* @Last Modified time: 2017-08-26 16:20:15
*/
var app=angular.module('zns_weibo', []);

app.controller('weibo', function ($scope, $http){
	$scope.replies=[];
	$scope.pages=[];
	$scope.curPage=1;
	
	//获取、显示留言
	function getPage(p){
		$scope.curPage=p;
		setCur($scope.pages.length);
		$http.get('api/weibo.php', {
			params: {act: 'get', page: p}
		}).success(function (arr){
			$scope.replies=arr;
		}).error(function (){
			alert('读取失败，请稍后重试');
		});
	}
	getPage(1);
	$scope.getPage=getPage;
	
	//提交留言
	$scope.submitMsg=function (){
		$http.get('api/weibo.php', {
			params: {act: 'add', content: $scope.inputText}
		}).success(function (res){
			$scope.replies.unshift({
				id:			res.id,
				content:	$scope.inputText,
				time:		res.time,
				acc:		0,
				ref:		0
			});
			
			if($scope.replies.length>6){
				$scope.replies.pop();
			}
			$scope.inputText='';
		}).error(function (){
			alert('提交失败');
		});
	};
	
	//页码
	function setCur(count){
		$scope.pages=[];
		for(var i=1;i<=count;i++){
			if(i==$scope.curPage){
				$scope.pages.push({num: i, className: 'active'});
			}else{
				$scope.pages.push({num: i, className: ''});
			}
		}
	}
	
	$http.get('api/weibo.php', {
		params: {act: 'get_page_count'}
	}).success(function (json){
		setCur(json.count);
	}).error(function (){
		alert('错误');
	});
	//$scope.pages=[{num: 1, className: ''},{num: 2, className: 'active'},{num: 3, className: ''}];
	
	//顶和踩的函数
	$scope.fnAcc=function (id){
		$http.get('api/weibo.php', {
			params: {act: 'acc', id: id}
		}).success(function (){
			for(var i=0;i<$scope.replies.length;i++){
				if($scope.replies[i].id==id){
					$scope.replies[i].acc++;
				}
			}
		}).error(function (){
			alert('错误');
		});
	};
	$scope.fnRef=function (id){
		$http.get('api/weibo.php', {
			params: {act: 'ref', id: id}
		}).success(function (){
			for(var i=0;i<$scope.replies.length;i++){
				if($scope.replies[i].id==id){
					$scope.replies[i].ref++;
				}
			}
		}).error(function (){
			alert('错误');
		});
	};
	$scope.fnDel=function (id){
		$http.get('api/weibo.php', {
			params: {act: 'del', id: id}
		}).success(function (){
			for(var i=0;i<$scope.replies.length;i++){
				if($scope.replies[i].id==id){
					$scope.replies.shift();
				}
			}
		}).error(function (){
			alert('错误');
		});
	};


});
