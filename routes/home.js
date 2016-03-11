var Controller	=	require("../controller");
module.exports	=	[{
	method: 'GET',
	path: '/',
	handler: Controller.IndexController.home
},];