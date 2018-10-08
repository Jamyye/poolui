'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "aeon.privpool.com",
		api_url : 'https://aeon-api.privpool.com',
		api_refresh_interval: 5000,
		app_update_interval: 30*60000
	};
});
