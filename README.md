# Simulador de Autômatos Finitos

## Descrição do Projeto

Este projeto é um simulador de autômatos finitos desenvolvido em JavaScript. A ferramenta recebe dois arquivos contendo a representação de um autômato finito e uma lista de testes com cadeias de entrada e seus resultados esperados. O simulador processa cada cadeia de entrada, verifica se ela é aceita pelo autômato e gera um arquivo com o resultado do reconhecimento de cada teste.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

├── automaton.json # Representação do autômato em JSON
├── input.csv # Lista de testes com cadeias de entrada e resultados esperados
├── output.csv # Arquivo gerado com os resultados dos testes
├── simulador.js # Lógica principal do simulador
└── README.md # Documentação do projeto

## Funcionalidades

- **Simulação de Cadeias de Entrada**: Processa cada cadeia de entrada para verificar se é aceita pelo autômato.
- **Geração de Resultados**: Gera um arquivo CSV com os resultados do processamento de cada cadeia de entrada, incluindo o tempo de processamento.

## Formato dos Arquivos

### Arquivo `automaton.json`

O arquivo `automaton.json` deve conter a representação do autômato em JSON. Exemplo:

```json 
{
  "initial": 0,
  "final": [4],
  "transitions": [
    { "from": 0, "to": 0, "read": "a" },
    { "from": 3, "to": 3, "read": "a" },
    { "from": 1, "to": 1, "read": "b" },
    { "from": 2, "to": 2, "read": "b" },
    { "from": 4, "to": 4, "read": "b" },
    { "from": 1, "to": 2, "read": "a" },
    { "from": 2, "to": 3, "read": "b" },
    { "from": 3, "to": 4, "read": "a" },
    { "from": 0, "to": 1, "read": "b" }
  ]
}
``````
### Arquivo input.csv

Cada linha do arquivo `input.csv` contém uma cadeia de entrada e o resultado esperado, separados por ponto e vírgula:
ab;1
aaaaabbbbbaaaaa;1
babababa;0
bbbbbbbb;0
aaaaaaaaaaaa;0
aaaaabaaaaa;1


### Arquivo output.csv

O arquivo `output.csv` gerado pelo simulador contém a cadeia de entrada, o resultado esperado, o resultado obtido e o tempo de processamento, separados por ponto e vírgula:

ab;1;0;0.000086
aaaaabbbbbaaaaa;1;0;0.000014
babababa;0;0;0.000004
bbbbbbbb;0;0;0.000011
aaaaaaaaaaaa;0;0;0.000008
aaaaabaaaaa;1;0;0.000005

### Uso

Para executar o simulador, utilize o seguinte comando:

```bash
node simulador.js automaton.json input.csv output.csv
````
O simulador processará os testes e gerará um arquivo output.csv com os resultados do reconhecimento de cada cadeia de entrada.


 

 
