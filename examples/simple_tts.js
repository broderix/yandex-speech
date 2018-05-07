var yandex_speech = require('../index');

/*
 to use lang: 'en-US' you need set developer_key
*/

yandex_speech.TTS({
	text: 'Привет, мир!',
	file: 'data/hello.mp3'
	}, function(){
		console.log('done');
	}
);
