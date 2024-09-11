module.exports = {
  prompter(cz, commit) {
    console.log('\nPersonalize sua mensagem de commit!\n');
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Selecione o tipo de alteração que você está fazendo:',
        choices: [
            {
                name: 'WIP: Trabalho em progresso',
                value: ':construction: WIP'
            },
            {
                name: 'feat: Uma nova funcionalidade',
                value: ':sparkles: feat'
            },
            { 
                name: 'fix: Correção de um bug',
                value: ':bug: fix'
            },
            { 
                name: 'style: Mudanças no estilo (formatação do código, etc)',
                value: ':ok_hand: style'
            },
            {
                name: 'refactor: Mudanças no código que não corrigem bug ou adicionam feature',
                value: ':recycle: refactor'
            },
            {
                name: 'test: Adicionando ou corrigindo testes',
                value: ':test_tube: test'
            },
            {
                name: 'chore: Atualizações em tarefas de build ou configurações',
                value: ':wrench: chore'
            },
            {
                name: 'docs: Atualização de README, CHANGELOG, etc',
                value: ':books: docs:'
            },
            {
                name: 'new package: Criação de um novo projeto',
                value: ':package: new package'
            }
        ]
    },
    {
        type: 'list',
        name: 'scope',
        message: 'Qual escopo da alteração:',
        choices: [
            {
                name: 'vue-quasar: Alterações no projeto vue-quasar',
                value: 'vue-quasar'
            },
            {
                name: 'database: Alterações no projeto database',
                value: 'database'
            },
            {
                name: 'learning-lab: Alterações no projeto raiz (learning-lab)',
                value: 'learning-lab'
            },
            {
                name: 'empty: Alterações que não se encaixam em nenhum escopo específico',
                value: ''
            }
        ]  
    },
    {
        type: 'input',
        name: 'subject',
        message: 'Escreva uma mensagem curta e objetiva:\n'
    },
    {
        type: 'input',
        name: 'body',
        message: 'Forneça uma descrição mais detalhada da mudança (opcional):\n'
    },
    
    ]).then((answers) => {
        let commitMessage = `${answers.type}`;
        commitMessage += `${answers.scope ? `(${answers.scope})` : ''}`;
        commitMessage += `: ${ answers.subject } \n\n${ answers.body }`;
        
        commit(commitMessage);
    });
  }
};
