(function () {

	requirejs.config({
		packages: [
			{name: 'rest', location: 'bower_components/rest', main: 'browser'},
			{name: 'when', location: 'bower_components/when', main: 'when'},
			{name: 'react', location: 'bower_components/react', main: 'react'},
			{name: 'JSXTransformer', location: 'bower_components/react', main: 'JSXTransformer'},
			{name: 'jsx', location: 'bower_components/requirejs-react-jsx', main: 'jsx'},
			{name: 'text', location: 'bower_components/requirejs-text', main: 'text'},
			{name: 'sockjs-client', location: 'bower_components/sockjs-client', main: 'dist/sockjs'},
			{name: 'stomp-websocket', location: 'bower_components/stomp-websocket', main: 'lib/stomp'}
		],
		shim: {
			"react": {
				"exports": "React"
			},
			"JSXTransformer": "JSXTransformer"
		},
		deps: ['main'],
		config: {
			jsx: {
				fileExtension: ".jsx",
				transformOptions: {
					harmony: true,
					stripTypes: false,
					inlineSourceMap: true
				},
				usePragma: true
			}
		}
	});

}());