const fs = require('fs');
const readline = require('readline');

class AutomatoFinito {
    constructor(spec) {
        this.initial = spec.initial;
        this.final = spec.final;
        this.transitions = spec.transitions;
    }

    run(inputWord) {
        let currentState = this.initial;
        for (let symbol of inputWord) {
            let transition = this.transitions.find(t => t.from === currentState && t.read === symbol);
            if (transition) {
                currentState = transition.to;
            } else {
                return false;
            }
        }
        return this.final.includes(currentState);
    }
}

async function main(specFile, inputFile, outputFile) {
    const spec = JSON.parse(fs.readFileSync(specFile, 'utf8'));
    const automato = new AutomatoFinito(spec);
    
    const fileStream = fs.createReadStream(inputFile);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const results = [];

    for await (const line of rl) {
        const [inputWord, expectedResult] = line.split(';');
        const startTime = process.hrtime();
        const result = automato.run(inputWord);
        const elapsedTime = process.hrtime(startTime);
        const elapsedTimeInSeconds = (elapsedTime[0] + elapsedTime[1] / 1e9).toFixed(6);
        results.push(`${inputWord};${expectedResult};${result ? 1 : 0};${elapsedTimeInSeconds}`);
    }

    fs.writeFileSync(outputFile, results.join('\n'), 'utf8');
}

if (process.argv.length !== 5) {
    console.log("Uso: node simulador.js arquivo_do_automato.json arquivo_de_testes.csv arquivo_de_saida.out");
    process.exit(1);
}

main(process.argv[2], process.argv[3], process.argv[4]);
