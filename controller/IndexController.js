exports.getHome = (request, reply) => {
	var names = [{ name: "Naveen", }, { name: "Kumar", }];
	return reply({ title: "Naveen", names: names }); // json response
	// return reply.view('index', { title: "Naveen", names: names }); // View Render
};