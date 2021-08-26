const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({

    nome: {type: String, unique: false, required: true},
    cargo: {type: String, unique: false, required: true},
    nascimento: {type: String, unique: false, required: true},
    ecivil:{type: String, unique: false, required: false},
    genero:{type: String, unique: false, required: false},
    endereco:{type: String, unique: false, required: true},
    bairro:{type: String, unique: false, required: true},
    cidade:{type: String, unique: false, required: true},
    cep:{type: String, unique: false, required: true},
    telefone1:{type: Number, unique: false, required: false},
    telefone2:{type: Number, unique: false, required: false},
    celular:{type: String, unique: false, required: true},
    contato:{type: String, unique: false, required: false},
    email:{type: String, unique: false, required: false},
    identidade:{type: String, unique: false, required: false},
    cpf:{type: String, unique: true, required: false},
    veiculo:{type: String, unique: false, required: false},
    habilitacao: {type: String, unique: false, required: false}
},

    {timestamps: true}
    
    );

    module.exports = mongoose.model('Candidate', CandidateSchema);