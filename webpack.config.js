// подключаем path к конфигу вебпак
const path = require('path');


// module.exports — это синтаксис экспорта в Node.js
module.exports = {

	// указали первое место, куда заглянет webpack, — файл index.js в папке src 
	entry: { main: './src/index.js'},
	
	// указали в какой файл будет собираться весь js и дали ему имя 
	output: {
		// переписали точку выхода, используя утилиту path 
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
			publicPath: ''
	  },

	// добавили режим разработчика  
	mode: 'development',
	
	devServer: {
		// путь, куда "смотрит" режим разработчика
		static: path.resolve(__dirname, './dist'), 

		// это ускорит загрузку в режиме разработки
		compress: true, 
		
		// порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
		port: 8080, 
		
		// сайт будет открываться сам при запуске npm run dev
		open: true
	  },
}

