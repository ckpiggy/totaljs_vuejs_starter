exports.install = function() {
	F.route('/', view_index);
	F.route('/api', hello_world);
};

function view_index() {
	var self = this;
	self.view('index');
}

function hello_world() {
	this.plain('hello world buddy...');
}