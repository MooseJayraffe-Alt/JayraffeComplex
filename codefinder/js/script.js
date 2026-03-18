main = document.getElementById('main');
error = document.getElementById('error');

JCXCode = document.getElementById('JCX-Code');

request = new XMLHttpRequest();
request.onreadystatechange = function() {
	if (this.readyState == 4) {
		if (this.status == 200) {
			response = JSON.parse(this.responseText);

			JCXCode.innerHTML = response['ip'];

			error.classList.value = 'd-none';
			main.classList.value = 'text-center';
		}
		else {
			main.classList.value = 'd-none';
			error.classList.value = 'alert alert-danger mb-5';
			error.innerHTML = 'Something went wrong.';
		}
	}
};
request.open('GET', 'https://ipinfo.io/json');
request.send();
