'use strict';
const Hapi 		=	require('hapi'),
	Hoek 		=	require("hoek"),
	Path 		=	require("path"),
	Nunjucks 	=	require("nunjucks"),
	Routes 		=	require('./routes'),
	server 		=	new Hapi.Server(); // Create a server with a host and port

// server.connection({ host: 'localhost', port: 8080 });
server.connection({ port: 8080 });

server.register(require('vision'), (err) => {
	Hoek.assert(!err, err);
	server.views({
		engines: {
			html: {
				compile: (src, options) => {
					var template = Nunjucks.compile(src, options.environment);
					return (context) => {
						return template.render(context);
					};
				},
				prepare: (options, next) => {
					options.compileOptions.environment = Nunjucks.configure(options.path, { watch : false });
					return next();
				}
			}
		},
		path: Path.join(__dirname, 'templates')
	});
});

// Add the route
for(var route in Routes) { server.route(Routes[route]); }

// Start the server
server.start((err) => {
	if (err) {
		throw err;
	}
	console.log('Server running at:', server.info.uri);
});