exports.home = (request, reply) => {
	var names = [{ name: "Naveen", }, { name: "Kumar", }];
	return reply.view('index', { title: "Naveen", names: names });
};