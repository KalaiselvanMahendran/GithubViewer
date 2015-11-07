var app = angular.module('GithubApp', []);

app.controller('GithubController', function($scope, $http, $log){
	$scope.title = "Github User Detail Viewer Application";
	// $scope.username = "kartik-v";
	$scope.repoSortOrder = "-stargazers_count";

	var onUserData = function(response){
		$scope.user = response.data;
		$http.get($scope.user.repos_url).then(onRepos, onError);
	};

	var onRepos = function(response){
		$scope.repos = response.data;
	};

	var onError = function(reason){
		$scope.error = "Unable to find Data!";
	};

	$scope.search = function(username){
		$log.info("searching for "+username);
		$http.get("https://api.github.com/users/"+username).then(onUserData, onError);
	};


	
});