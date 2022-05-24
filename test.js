
/*
const { stdin, stdout } = process;

stdout.write('Эй как тебя зовут?\n');
stdin.on('data', data => {
    const dataString = data.toString();
    const reverseName = dataString.split('').reverse().join('');
    stdout.write('Привет, \n');
    stdout.write(`твое имя наооборот ${reverseName}`);      
    process.exit();
    })
  
  
    process.on('exit', () => stdout.write('Удачи дружок!'));
*/
// console.log(process.argv.slice(2));



   /* const { stdout, stdin, exit} = process;
    const flag = process.argv[2];
    const allowedFlags = ['-m', '-s'];

    stdout.write('Введите пожалуйста числа\n');
    stdin.on('data', data => {
        const numString = data.toString();
        const numStringArray = numString.split(' ');
        const [firstNum, secondNum] = numStringArray.map(numStr => +numStr);
        if (flag === '-s') {
            const sum = firstNum + secondNum;
            stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
        } else {
            const mult = firstNum * secondNum;
            stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
        }
        process.exit();
    });
    */
 
    /*const { stdout, stdin, exit } = process;
    const flag = process.argv[2];
    const allowedFlags = ['-d', '-f'];
    
    if(flag === '-d'){
        console.log(__dirname);
        process.exit();
    } if(flag === '-f') {
        console.log(__filename)
        process.exit();
    } else {
        stdout.write('Запустите приложение с флагами -d или -f');
        process.exit();
    } */

    /*const {stdout} = process;
    const flag = process.argv[2];

    if(flag === '-d'){
        stdout.write(__dirname);
    } else if(flag === '-f'){
        stdout.write(__filename)
    } else {
        stdout.write('Запуститте с правильными флагами');
    } */

        const path = require('path');
        const fs = require('fs');


        // fs.mkdir(path.join(__dirname, 'notes'), err => {
        //     if (err) throw err;
        //     console.log('directory created');
        // })

        /*
        fs.writeFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            'Hello, world!',
            (err) => {
                if(err) throw err;
                console.log('file created');
            }
        );
        */
       
        /*
        fs.writeFile(
            path.join(__dirname, 'text.txt'),
            'text fish',
            (err) => {
                if(err) throw err;
                console.log('file wiht text');
            }
        ); 
        */

        fs.readFile(
            path.join(__dirname, 'text.txt'),
            'utf-8',
            (err, data) => {
                if(err) throw err;
                console.log(data);
            }
        )




        


    
    
    
