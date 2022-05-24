const path = require('path');
const fs = require('fs');
const {stdin, stdout, exit} = process;

fs.writeFile(
    path.join(__dirname, 'text.txt'),
    'Start project\n',
    (err) => {
        if(err) throw err;
        console.log('file created');
        }
)

stdout.write('Привет, это начало задания\n');
stdin.on('data', data => {
    stdout.write('Продолжай делать то, что тебе нравится\n');
    fs.appendFile(
        path.join(__dirname, 'text.txt'),
        `${data}\n`,
        (err) => {
            if(err) throw err;
            console.log('файл был изменен');
        }
    )
});

process.on('exit', () => stdout.write('Good luck'));