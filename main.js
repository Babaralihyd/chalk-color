// Import the Chalk module
// In TypeScript, `
// chalk` is a popular
// library used for styling and
// coloring console output
import chalk from 'chalk';
// Basic usage
console.log(chalk.blue('Hello world!'));
// Combine styled and normal strings
console.log(chalk.red('Hello') + ' ALI' + chalk.yellow('!'));
// Compose multiple styles using the chainable API
console.log(chalk.blue.bgYellow.bold('Hello world!'));
// Pass in multiple arguments
console.log(chalk.green('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// Nest styles
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// Use RGB colors
console.log(chalk.rgb(299, 400, 200).underline('Underlined reddish color'));
// Use HEX colors
console.log(chalk.hex('#DEADED').bold('Bold gray color'));
// ================================================================================
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
