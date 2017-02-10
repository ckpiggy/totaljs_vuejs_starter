exports.install = function() {
	F.route('/', view_index);
	F.route('/hello', hello_world);
	// or
	// F.route('/');
};

function view_index() {
	var self = this;
	self.view('index');
}

function hello_world() {
	this.plain('hello world buddy...');
}