[output.csv](https://github.com/user-attachments/files/15570395/output.csv)Descrição do Projeto
Este projeto é um simulador de autômatos finitos desenvolvido em JavaScript. A ferramenta recebe 
dois arquivos contendo a representação de um autômato finito e uma lista de testes com cadeias de
entrada e seus resultados esperados. O simulador processa cada cadeia de entrada, verifica se ela é 
aceita pelo autômato e gera um arquivo com o resultado do reconhecimento de cada teste.
Estrutura do Projeto
O projeto está organizado da seguinte forma:
.
├── automaton.json    # Representação do autômato em JSON
├── input.csv         # Lista de testes com cadeias de entrada e resultados esperados
├── output.csv        # Arquivo gerado com os resultados dos testes
├── simulador.js      # Lógica principal do simulador
└── README.md         # Documentação do projeto
Funcionalidades
Simulação de Cadeias de Entrada: Processa cada cadeia de entrada para verificar se é aceita pelo autômato.
Geração de Resultados: Gera um arquivo CSV com os resultados do processamento de cada cadeia de entrada, incluindo o tempo de processamento.
Formato dos Arquivos
Arquivo automaton.json
O arquivo automaton.json deve conter a representação do autômato em JSON. Exemplo:
[automaton.json](https://github.com/user-attachments/files/15570372/automaton.json)
Arquivo input.csv
Cada linha do arquivo input.csv contém uma cadeia de entrada e o resultado esperado, separados por ponto e vírgula:
[input.csv](https://github.com/user-attachments/files/15570392/input.csv)
Arquivo output.csv
O arquivo output.csv gerado pelo simulador contém a cadeia de entrada, o resultado esperado, o resultado obtido e o tempo de processamento, separados por ponto e vírgula:
[Uploadab;1;0;0.000086
aaaaabbbbbaaaaa;1;0;0.000014
babababa;0;0;0.000004
bbbbbbbb;0;0;0.000011
aaaaaaaaaaaa;0;0;0.000008
aaaaabaaaaa;1;0;0.000005ing output.csv…]()
Para executar o simulador, utilize o comando:node simulador.js automaton.json input.csv output.csv
O simulador processará os testes e gerará um arquivo output.csv com os resultados do reconhecimento de cada cadeia de entrada.
