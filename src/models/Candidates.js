const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({

    name: {type: String, unique: false, required: false}, //true},
    cargo: {type: String, unique: false, required: false}, //true},
    nascimento: {type: Number, unique: false, required: false}, //true},
    ecivil:{type: String, unique: false, required: false},
    genero:{type: String, unique: false, required: false},
    endereco:{type: String, unique: false, required: false}, //true},
    bairro:{type: String, unique: false, required: false}, //true},
    cidade:{type: String, unique: false, required: false}, //true},
    cep:{type: Number, unique: false, required: false}, //true},
    telefone1:{type: Number, unique: false, required: false}, //false},
    telefone2:{type: Number, unique: false, required: false},
    celular:{type: Number, unique: false, required: false}, //true},
    contato:{type: Number, unique: false, required: false},
    email:{type: String, unique: false, required: false},
    identidade:{type: Number, unique: false, required: false},
    cpf:{type: Number, unique: true, required: false},
    veiculo:{type: String, unique: false, required: false},
    habilitacao: {type: String, unique: false, required: false}
},

    {timestamps: true}
    
    );

    module.exports = mongoose.model('Candidate', CandidateSchema);