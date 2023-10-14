"use strict";Object.defineProperty(exports, "__esModule", {value: true});//@ts-nocheck

    class QuestionConstructor {
        
        
        
        
        
        constructor({ answers, body, type, id }) {
            // Construct your question here
            this.id = id;
            this.type = type;
            this.body = body;
            this.answers = answers;
            // You can set the date to the current date or any other logic as needed
            this.date = new Date();
        }
    }

    class AnswerConstructor {
        
        
        
        constructor({ char, body, isCorrect }) {
            // Construct your answer here
            this.char = char;
            this.body = body;
            this.isCorrect = isCorrect;
        }
    }

     const questions = [
        new QuestionConstructor({
            type: 'SOCIAL',
            body: 'Qual é o sistema de governo dos Estados Unidos?',
            answers: [
                { char: 'A', body: 'Monarquia', isCorrect: false },
                { char: 'B', body: 'Socialismo', isCorrect: false },
                { char: 'C', body: 'República', isCorrect: true },
                { char: 'D', body: 'Comunismo', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'SOCIAL',
            body: 'Quem foi o primeiro presidente do Brasil?',
            answers: [
                { char: 'A', body: 'Getúlio Vargas', isCorrect: false },
                { char: 'B', body: 'José Sarney', isCorrect: false },
                { char: 'C', body: 'Juscelino Kubitschek', isCorrect: false },
                { char: 'D', body: 'Marechal Deodoro da Fonseca', isCorrect: true },
            ],
        }),
    
        new QuestionConstructor({
            type: 'SOCIAL',
            body: 'Qual é o maior país do mundo em termos de área territorial?',
            answers: [
                { char: 'A', body: 'China', isCorrect: false },
                { char: 'B', body: 'Estados Unidos', isCorrect: false },
                { char: 'C', body: 'Canadá', isCorrect: false },
                { char: 'D', body: 'Rússia', isCorrect: true },
            ],
        }),
    
        new QuestionConstructor({
            type: 'MATH',
            body: 'Qual é o resultado de 8 x 5?',
            answers: [
                { char: 'A', body: '30', isCorrect: false },
                { char: 'B', body: '35', isCorrect: true },
                { char: 'C', body: '40', isCorrect: false },
                { char: 'D', body: '45', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'MATH',
            body: 'Quanto é a raiz quadrada de 64?',
            answers: [
                { char: 'A', body: '4', isCorrect: false },
                { char: 'B', body: '6', isCorrect: false },
                { char: 'C', body: '8', isCorrect: true },
                { char: 'D', body: '10', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'MATH',
            body: 'Qual é o valor de π (pi) arredondado para duas casas decimais?',
            answers: [
                { char: 'A', body: '3.14', isCorrect: true },
                { char: 'B', body: '3.16', isCorrect: false },
                { char: 'C', body: '3.12', isCorrect: false },
                { char: 'D', body: '3.18', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'NATURE',
            body: 'Qual é o maior órgão do corpo humano?',
            answers: [
                { char: 'A', body: 'Coração', isCorrect: false },
                { char: 'B', body: 'Estômago', isCorrect: false },
                { char: 'C', body: 'Pulmões', isCorrect: false },
                { char: 'D', body: 'Pele', isCorrect: true },
            ],
        }),
    
        new QuestionConstructor({
            type: 'NATURE',
            body: 'Qual é o gás mais abundante na atmosfera da Terra?',
            answers: [
                { char: 'A', body: 'Hélio', isCorrect: false },
                { char: 'B', body: 'Oxigênio', isCorrect: false },
                { char: 'C', body: 'Nitrogênio', isCorrect: true },
                { char: 'D', body: 'Dióxido de carbono', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'NATURE',
            body: 'Quantos ossos um adulto humano tem em seu corpo?',
            answers: [
                { char: 'A', body: '206', isCorrect: true },
                { char: 'B', body: '180', isCorrect: false },
                { char: 'C', body: '250', isCorrect: false },
                { char: 'D', body: '300', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'OTHERS',
            body: 'Quem é o autor de "A Moreninha"?',
            answers: [
                { char: 'A', body: 'Machado de Assis', isCorrect: false },
                { char: 'B', body: 'José de Alencar', isCorrect: true },
                { char: 'C', body: 'Clarice Lispector', isCorrect: false },
                { char: 'D', body: 'Graciliano Ramos', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'OTHERS',
            body: 'Qual é a capital da Austrália?',
            answers: [
                { char: 'A', body: 'Sydney', isCorrect: false },
                { char: 'B', body: 'Melbourne', isCorrect: false },
                { char: 'C', body: 'Canberra', isCorrect: true },
                { char: 'D', body: 'Brisbane', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'OTHERS',
            body: 'Quem pintou a Mona Lisa?',
            answers: [
                { char: 'A', body: 'Vincent van Gogh', isCorrect: false },
                { char: 'B', body: 'Pablo Picasso', isCorrect: false },
                { char: 'C', body: 'Leonardo da Vinci', isCorrect: true },
                { char: 'D', body: 'Michelangelo', isCorrect: false },
            ],
        }),
        new QuestionConstructor({
            type: 'SOCIAL',
            body: 'Qual é o sistema de governo do Reino Unido?',
            answers: [
                { char: 'A', body: 'República', isCorrect: false },
                { char: 'B', body: 'Monarquia Constitucional', isCorrect: true },
                { char: 'C', body: 'Democracia Direta', isCorrect: false },
                { char: 'D', body: 'Ditadura', isCorrect: false },
            ],
            
        }),
    
        new QuestionConstructor({
            type: 'SOCIAL',
            body: 'Quem foi o fundador do socialismo científico?',
            answers: [
                { char: 'A', body: 'Karl Marx', isCorrect: true },
                { char: 'B', body: 'Adam Smith', isCorrect: false },
                { char: 'C', body: 'John Locke', isCorrect: false },
                { char: 'D', body: 'Friedrich Hayek', isCorrect: false },
            ],
            
        }),
    
        new QuestionConstructor({
            type: 'SOCIAL',
            body: 'Qual é o país com a maior população do mundo?',
            answers: [
                { char: 'A', body: 'Índia', isCorrect: false },
                { char: 'B', body: 'Estados Unidos', isCorrect: false },
                { char: 'C', body: 'China', isCorrect: true },
                { char: 'D', body: 'Brasil', isCorrect: false },
            ],
            
        }),
    
        new QuestionConstructor({
            type: 'MATH',
            body: 'Qual é a fórmula do teorema de Pitágoras?',
            answers: [
                { char: 'A', body: 'a^2 + b^2 = c^2', isCorrect: true },
                { char: 'B', body: 'E = mc^2', isCorrect: false },
                { char: 'C', body: 'F = ma', isCorrect: false },
                { char: 'D', body: 'H = R * T', isCorrect: false },
            ],
            
        }),
    
        new QuestionConstructor({
            type: 'MATH',
            body: 'Qual é o valor de sen(30 graus)?',
            answers: [
                { char: 'A', body: '0.5', isCorrect: true },
                { char: 'B', body: '1', isCorrect: false },
                { char: 'C', body: '0.866', isCorrect: false },
                { char: 'D', body: '0', isCorrect: false },
            ],
            
        }),
    
        new QuestionConstructor({
            type: 'MATH',
            body: 'Qual é o resultado de 12 / 4?',
            answers: [
                { char: 'A', body: '2', isCorrect: false },
                { char: 'B', body: '3', isCorrect: true },
                { char: 'C', body: '4', isCorrect: false },
                { char: 'D', body: '6', isCorrect: false },
            ],
            
        }),
    
        new QuestionConstructor({
            type: 'NATURE',
            body: 'Qual é o animal mais rápido do mundo?',
            answers: [
                { char: 'A', body: 'Guepardo', isCorrect: true },
                { char: 'B', body: 'Pombo', isCorrect: false },
                { char: 'C', body: 'Tartaruga', isCorrect: false },
                { char: 'D', body: 'Elefante', isCorrect: false },
            ],
            
        }),
    
        new QuestionConstructor({
            type: 'NATURE',
            body: 'Qual é o elemento químico mais abundante na crosta terrestre?',
            answers: [
                { char: 'A', body: 'Ferro', isCorrect: false },
                { char: 'B', body: 'Carbono', isCorrect: false },
                { char: 'C', body: 'Silício', isCorrect: true },
                { char: 'D', body: 'Oxigênio', isCorrect: false },
            ],
            
        }),
    
        new QuestionConstructor({
            type: 'NATURE',
            body: 'Qual é o processo pelo qual as plantas fabricam seu próprio alimento?',
            answers: [
                { char: 'A', body: 'Fotossíntese', isCorrect: true },
                { char: 'B', body: 'Digestão', isCorrect: false },
                { char: 'C', body: 'Respiração', isCorrect: false },
                { char: 'D', body: 'Evolução', isCorrect: false },
            ],
            
        }),
    
        new QuestionConstructor({
            type: 'OTHERS',
            body: 'Qual é o instrumento musical mais antigo do mundo?',
            answers: [
                { char: 'A', body: 'Violino', isCorrect: false },
                { char: 'B', body: 'Flauta', isCorrect: false },
                { char: 'C', body: 'Harpa', isCorrect: true },
                { char: 'D', body: 'Piano', isCorrect: false },
            ],
            
        }),
    
        new QuestionConstructor({
            type: 'OTHERS',
            body: 'Qual é o maior deserto do mundo?',
            answers: [
                { char: 'A', body: 'Saara', isCorrect: true },
                { char: 'B', body: 'Atacama', isCorrect: false },
                { char: 'C', body: 'Gobi', isCorrect: false },
                { char: 'D', body: 'Antártica', isCorrect: false },
            ],
            
        }),
    
        new QuestionConstructor({
            type: 'OTHERS',
            body: 'Quem escreveu "Dom Quixote"?',
            answers: [
                { char: 'A', body: 'William Shakespeare', isCorrect: false },
                { char: 'B', body: 'Friedrich Nietzsche', isCorrect: false },
                { char: 'C', body: 'Miguel de Cervantes', isCorrect: true },
                { char: 'D', body: 'Leo Tolstoy', isCorrect: false },
            ],
            
        }),
        new QuestionConstructor({
            type: 'SOCIAL',
            body: 'Qual é o sistema de governo da Alemanha?',
            answers: [
                { char: 'A', body: 'República', isCorrect: true },
                { char: 'B', body: 'Monarquia Constitucional', isCorrect: false },
                { char: 'C', body: 'Democracia Direta', isCorrect: false },
                { char: 'D', body: 'Ditadura', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'SOCIAL',
            body: 'Quem é considerado o pai da psicanálise?',
            answers: [
                { char: 'A', body: 'Sigmund Freud', isCorrect: true },
                { char: 'B', body: 'Carl Jung', isCorrect: false },
                { char: 'C', body: 'B.F. Skinner', isCorrect: false },
                { char: 'D', body: 'Ivan Pavlov', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'SOCIAL',
            body: 'Qual é o nome do tratado que encerrou a Primeira Guerra Mundial?',
            answers: [
                { char: 'A', body: 'Tratado de Versalhes', isCorrect: true },
                { char: 'B', body: 'Tratado de Tordesilhas', isCorrect: false },
                { char: 'C', body: 'Tratado de Paris', isCorrect: false },
                { char: 'D', body: 'Tratado de Kyoto', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'SOCIAL',
            body: 'Qual é o maior rio do mundo em volume de água?',
            answers: [
                { char: 'A', body: 'Nilo', isCorrect: false },
                { char: 'B', body: 'Amazonas', isCorrect: true },
                { char: 'C', body: 'Yangtzé', isCorrect: false },
                { char: 'D', body: 'Mississipi', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'SOCIAL',
            body: 'Quem escreveu a "A Origem das Espécies"?',
            answers: [
                { char: 'A', body: 'Charles Darwin', isCorrect: true },
                { char: 'B', body: 'Isaac Newton', isCorrect: false },
                { char: 'C', body: 'Albert Einstein', isCorrect: false },
                { char: 'D', body: 'Galileu Galilei', isCorrect: false },
            ],
        }),
    
        // Matemática
        new QuestionConstructor({
            type: 'MATH',
            body: 'Qual é o resultado de 6 x 9?',
            answers: [
                { char: 'A', body: '42', isCorrect: true },
                { char: 'B', body: '45', isCorrect: false },
                { char: 'C', body: '54', isCorrect: false },
                { char: 'D', body: '63', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'MATH',
            body: 'Qual é o valor de π (pi) arredondado para três casas decimais?',
            answers: [
                { char: 'A', body: '3.141', isCorrect: true },
                { char: 'B', body: '3.140', isCorrect: false },
                { char: 'C', body: '3.142', isCorrect: false },
                { char: 'D', body: '3.139', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'MATH',
            body: 'Qual é o número primo mais próximo de 50?',
            answers: [
                { char: 'A', body: '47', isCorrect: true },
                { char: 'B', body: '53', isCorrect: false },
                { char: 'C', body: '43', isCorrect: false },
                { char: 'D', body: '59', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'MATH',
            body: 'Qual é a área de um triângulo com base de 8 unidades e altura de 6 unidades?',
            answers: [
                { char: 'A', body: '24 unidades quadradas', isCorrect: true },
                { char: 'B', body: '30 unidades quadradas', isCorrect: false },
                { char: 'C', body: '48 unidades quadradas', isCorrect: false },
                { char: 'D', body: '12 unidades quadradas', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'MATH',
            body: 'Qual é o resultado de 3^4?',
            answers: [
                { char: 'A', body: '9', isCorrect: false },
                { char: 'B', body: '12', isCorrect: false },
                { char: 'C', body: '27', isCorrect: false },
                { char: 'D', body: '81', isCorrect: true },
            ],
        }),
        // Ciências da Natureza
        new QuestionConstructor({
            type: 'NATURE',
            body: 'Qual é o maior planeta do sistema solar?',
            answers: [
                { char: 'A', body: 'Terra', isCorrect: false },
                { char: 'B', body: 'Júpiter', isCorrect: true },
                { char: 'C', body: 'Vênus', isCorrect: false },
                { char: 'D', body: 'Marte', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'NATURE',
            body: 'Qual é o animal mais venenoso do mundo?',
            answers: [
                { char: 'A', body: 'Cobra', isCorrect: false },
                { char: 'B', body: 'Aranha Armadeira', isCorrect: true },
                { char: 'C', body: 'Escorpião', isCorrect: false },
                { char: 'D', body: 'Medusa', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'NATURE',
            body: 'Quantas estações do ano existem?',
            answers: [
                { char: 'A', body: '2', isCorrect: false },
                { char: 'B', body: '3', isCorrect: true },
                { char: 'C', body: '4', isCorrect: false },
                { char: 'D', body: '5', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'NATURE',
            body: 'Qual é o nome do processo pelo qual as plantas perdem água na forma de vapor?',
            answers: [
                { char: 'A', body: 'Fotossíntese', isCorrect: false },
                { char: 'B', body: 'Respiração', isCorrect: false },
                { char: 'C', body: 'Transpiração', isCorrect: true },
                { char: 'D', body: 'Digestão', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'NATURE',
            body: 'Qual é o nome da maior floresta tropical do mundo?',
            answers: [
                { char: 'A', body: 'Mata Atlântica', isCorrect: false },
                { char: 'B', body: 'Floresta Amazônica', isCorrect: true },
                { char: 'C', body: 'Floresta Boreal', isCorrect: false },
                { char: 'D', body: 'Floresta de Coníferas', isCorrect: false },
            ],
        }),
    
        // Temas Gerais
        new QuestionConstructor({
            type: 'OTHERS',
            body: 'Quem foi o primeiro homem a pisar na Lua?',
            answers: [
                { char: 'A', body: 'Yuri Gagarin', isCorrect: false },
                { char: 'B', body: 'Alan Shepard', isCorrect: false },
                { char: 'C', body: 'Neil Armstrong', isCorrect: true },
                { char: 'D', body: 'John Glenn', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'OTHERS',
            body: 'Qual é a capital da Rússia?',
            answers: [
                { char: 'A', body: 'São Petersburgo', isCorrect: false },
                { char: 'B', body: 'Kiev', isCorrect: false },
                { char: 'C', body: 'Minsk', isCorrect: false },
                { char: 'D', body: 'Moscou', isCorrect: true },
            ],
        }),
    
        new QuestionConstructor({
            type: 'OTHERS',
            body: 'Quem é o autor da obra "1984"?',
            answers: [
                { char: 'A', body: 'George Orwell', isCorrect: true },
                { char: 'B', body: 'Aldous Huxley', isCorrect: false },
                { char: 'C', body: 'Ray Bradbury', isCorrect: false },
                { char: 'D', body: 'Isaac Asimov', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'OTHERS',
            body: 'Qual é o maior oceano do mundo?',
            answers: [
                { char: 'A', body: 'Oceano Atlântico', isCorrect: false },
                { char: 'B', body: 'Oceano Pacífico', isCorrect: true },
                { char: 'C', body: 'Oceano Índico', isCorrect: false },
                { char: 'D', body: 'Oceano Ártico', isCorrect: false },
            ],
        }),
    
        new QuestionConstructor({
            type: 'OTHERS',
            body: 'Qual é o símbolo químico do ouro?',
            answers: [
                { char: 'A', body: 'Au', isCorrect: true },
                { char: 'B', body: 'Ag', isCorrect: false },
                { char: 'C', body: 'Fe', isCorrect: false },
                { char: 'D', body: 'Cu', isCorrect: false },
            ],
        }),
    ]; exports.questions = questions;