import program from 'commander';
import Generate from '../tasks/generate';

program
    .action(() => {
        new Generate(['model', ...program.args]).run();
    })
    .parse(process.argv);

if (!program.args.length) {
    program.help();
}