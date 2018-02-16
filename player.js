var ap1 = new APlayer({
    element: document.getElementById('player'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#e6d0b2',
    preload: 'metadata',
    mode: 'circulation',
    music: [{
        title: 'Paleng Bae',
        author: 'Marvey Kaya',
        url: 'https://sites.google.com/site/ambonmp3/mp3/Marvel%20Kaya%20-%20Paleng%20Bae.mp3',
        pic: 'https://sites.google.com/site/ambonmp3/gambarmp3/mk-palengbae.jpg',
	lrc: 'https://rawgit.com/cholebeharia/lirikAmbon/master/mk-palengbae.txt'
    },
	{
	title: 'Mama',
        author: 'Marvey Kaya',
        url: 'https://sites.google.com/site/ambonmp3/mp3/Marvel%20Kaya%20-%20Mama.mp3',
        pic: 'https://sites.google.com/site/ambonmp3/gambarmp3/mk-mama.jpg',
	lrc: 'https://rawgit.com/cholebeharia/lirikAmbon/master/Marvey%20Kaya%20-%20Mama.txt'
	},
	{
	title: 'Beta Harap',
        author: 'Mitha Talahatu',
        url: 'https://sites.google.com/site/ambonmp3/mp3/amq%20beta%20harap%20-mitha.mp3',
        pic: 'https://sites.google.com/site/ambonmp3/gambarmp3/mt-betaharap.jpg',
	lrc: 'https://rawgit.com/cholebeharia/lirikAmbon/master/Mitha%20BetaHarap.txt'
	},
	{
	title: 'Mati Rasa',
        author: 'Richard Rehatta',
        url: 'https://sites.google.com/site/ambonmp3/mp3/Richard%20Rehatta%20-%20Mati%20Rasa.mp3',
        pic: 'https://sites.google.com/site/ambonmp3/gambarmp3/rr-betamatirasa.jpg',
	lrc: 'https://rawgit.com/cholebeharia/lirikAmbon/master/Richard%20Rehatta%20-%20Mati%20Rasa.txt'
	},
	{
	title: 'Jang Dengar',
        author: 'Youchen Amos',
        url: 'https://sites.google.com/site/ambonmp3/mp3/Youchen%20Amos%20-%20Jang%20Dengar.mp3',
        pic: 'https://sites.google.com/site/ambonmp3/gambarmp3/yo-jangdengar.jpg',
	lrc: 'https://rawgit.com/cholebeharia/lirikAmbon/master/Youchen%20Amos%20-%20Jang%20Dengar.txt'
	}
	]
});
