// essa biblioteca axios é utilizada para realizar requisições HTTP como GET, POST, DELETE,...
import axios from "axios";

//Criando uma instância do axios, chamada "api"
const api = axios.create({
    baseURL: "http://localhost:5000", //Define a URL base para toas as requisições feitas com essa instância
})

export default api;
