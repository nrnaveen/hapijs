exports.getHome = (req, res) => {
	var names = [{ name: "Naveen", }, { name: "Kumar", }];
	// return res({ title: "Naveen", names: names }); // json response
	return res.view('index', { title: "Naveen", names: names }); // View Render
};

exports.postHome = (req, res) => {
	var names = [{ name: "Naveen", }, { name: "Kumar", }];
	return res({ title: "Naveen", names: names }); // json response
	// return res.view('index', { title: "Naveen", names: names }); // View Render
};