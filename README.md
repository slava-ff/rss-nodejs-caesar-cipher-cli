#### How to run Caesar cipher CLI tool 
- use command in command line `node .TASK1/src/commander.js`
- use flags:
	- `-s <num>` or `--shift <num>'` to set amount of chars to shift. This is  required option.
	- `-a <action>` or `--action <action>` to set one of actions: `encode` or `decode`. This is  required option.
	- `-i <filename>` or `--input <filename>` to set path to file to read. If you skip this flag the input will be available from command line.
	- `-o <filename>` or `--output <filename>` to set path to file to write. If you skip this flag the output will be sent to command line.










Каждый пункт - **10 баллов**

4. если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0
5. если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0
10. кодовая база не находится в одном файле, а разделена на файлы в соответствии с выполняемыми задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.)
