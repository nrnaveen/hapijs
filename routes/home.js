var Controller	=	require("../controller");
module.exports	=	[{
	path: '/',
	method: 'GET',
	handler: Controller.IndexController.getHome
}, {
	path: '/',
	method: 'POST',
	handler: Controller.IndexController.postHome
}];