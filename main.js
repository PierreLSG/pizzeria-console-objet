class Pizza {
    id = 0;
    code = '';
    libelle = '';
    prix = '';
 
    constructor(pId, pCode, pLibelle, pPrix) {
        this.id = pId;
        this.code = pCode;
        this.libelle = pLibelle;
        this.prix = pPrix;
    }
}
 
const readline = require('readline');
 
const promptMessage = `***** Pizzeria Administration *****  \n 
                        1. Lister les pizzas \n 
                        2. Ajouter une nouvelle pizza \n
                        3. Mettre à jour une pizza \n
                        4. Supprimer une pizza \n
                        99. Sortir \n :`
 
let pizzas = [];
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: promptMessage
});
 
rl.prompt();
 
rl.on('line', (line) => {
    switch (line.trim()) {
        case '1':
            console.log('Liste des pizzas');
            showPizzas();
            break;
        case '2':
            console.log('Ajoute d\'une nouvelle pizza');
            addPizza();
            break;
        case '3':
            console.log('Mise à jour d\'une pizza');
            rl.question('Entrez l\'id de la pizza : ', (pizzaId) => {
                updatePizza(pizzaId);
            })
            break;
        case '4':
            console.log('Suppression d\'une pizza');
            rl.question('Entrez l\'id de la pizza : ', (pizzaId) => {
                deletePizza(pizzaId);
            })
            break;
        case '99':
            console.log('Au revoir :(');
            process.exit(0);
            break;
        default:
            showPizzas();
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Au revoir :(');
    process.exit(0);
});
 
function showPizzas() {
    console.log(pizzas);
}
 
function addPizza() {
    let pizza = new Pizza();
    rl.question('Entrez l\'id de la pizza : ', (pizzaId) => {
        pizza.id = pizzaId;
        rl.question('Entrez le de la pizza : ', (pizzaCode) => {
            pizza.code = pizzaCode;
            rl.question('Entrez le libellé de la pizza : ', (pizzaLibelle) => {
                pizza.libelle = pizzaLibelle;
                rl.question('Entrez le prix de la pizza : ', (pizzaPrix) => {
                    pizza.prix = pizzaPrix;
                    pizzas.push(pizza);
                });
            });
        });
    });
}
 
function updatePizza(id) {
    let pizza = pizzas[id];
    rl.question('Please type your pizza code ? ', (pizzaCode) => {
        pizza.code = pizzaCode;
        rl.question('Please type your pizza libelle ? ', (pizzaLibelle) => {
            pizza.libelle = pizzaLibelle;
            rl.question('Please type your pizza price ? ', (pizzaPrix) => {
                pizza.prix = pizzaPrix;
                pizzas[id] = pizza;
            });
        });
    });
}
 
function deletePizza(id) {
    pizzas.splice(id, 1)
}