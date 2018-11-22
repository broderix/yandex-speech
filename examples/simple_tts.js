var yandex_speech = require('../index');

/*
 to use lang: 'en-US' you need set developer_key
*/

yandex_speech.TTS({
	developer_key: '3b7b9fba-cbcd-47d1-854a-b359ca0e5da7',
	text: 'Привет, мир!',
	file: 'data/hello.mp3'
}, function() {
		console.log('done');
	}
);