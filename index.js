import input from 'input'; 
import chalk from 'chalk'; 

async function cssInput() {
    const arr = [];
    let question;

    do {
        question ? arr.push(question) : '';
        question = (await input.text("Digite um elemento CSS:")).toLowerCase();
    } while (question != 'sair');

    console.log(chalk.green.bold(`CSS: ${arr.sort()}`));
}
cssInput();