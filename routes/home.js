var Controller	=	require("../controller");
module.exports	=	[{
	method: 'GET',
	path: '/',
	handler: Controller.IndexController.getHome
}, {
	method: 'POST',
	path: '/',
	handler: Controller.IndexController.postHome
}];