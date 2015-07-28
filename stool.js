var suite;

function abort() {
	if (!suite || (suite && !suite.running)) return;

	suite.abort();
	var results = document.getElementsByClassName('result');
	for (var i = 0; i < results.length; i++) {
		if (results[i].classList.contains('running'))
			results[i].innerText = 'aborted';
	}
}

function clear() {
	if (suite && suite.running) abort();

	var results = document.getElementsByClassName('result');
	for (var i = 0; i < results.length; i++) {
		results[i].innerText = '';
		results[i].classList.remove('running');
	}
}

function run() {
	abort();

	var titles = document.getElementsByClassName('title');
	var cases = document.getElementsByClassName('case');
	var results = document.getElementsByClassName('result');

	suite = new Benchmark.Suite;
	suite.on('complete', function() {
		console.log(this);
		document.body.classList.remove('running');
	});

	document.body.classList.add('running');

	for (var i = 0; i < cases.length; i++) {
		results[i].classList.add('running');
		results[i].innerText = 'queued';
		suite.add(titles[i].value, cases[i].value, {
			'onCycle': (function (result) {
				return function(event) {
					if (event.target.aborted) return;
					result.innerText = Math.round(event.target.hz).toLocaleString() + ' ops/sec';
				};
			})(results[i]),
			'onComplete': (function (result) {
				return function(event) {
					if (event.target.aborted) return;
					result.innerText = Math.round(event.target.hz).toLocaleString() + ' ops/sec';
					result.classList.remove('running');
				};
			})(results[i])
		});
	}

	suite.run({ 'async': true });
}

function add() {
	var html = '<td><button class="remove" tabindex="-1">Remove</button></td><td class="inputs"><input type="text" class="title input" placeholder="Label"><textarea rows="6" class="case input" placeholder="Code"></textarea></td><td class="result"></td>'
	var s = document.getElementById('suite');
	var tr = document.createElement('tr');
	tr.innerHTML = html;
	tr.getElementsByClassName('remove')[0].onclick = (function (tr) {
		return function () {
			tr.remove();
			clear();
		};
	})(tr);

	var inputs = tr.getElementsByClassName('input');
	for (var i = 0; i < inputs.length; i++)
		inputs[i].onkeydown = abort;

	s.appendChild(tr);
	clear();
}

document.getElementById('add').onclick = add
document.getElementById('run').onclick = run
document.getElementById('abort').onclick = abort

add();
add();