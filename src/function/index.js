import { api } from "../service/api";

export async function postPython(email, senha) {
    return new Promise((resolve, reject) => {
        console.log(email);
        console.log(senha);
        api.post(`/login`, {
            "email": email,
            "senha": senha
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

        )
            .then((response) => {
                resolve("Sucesso")
            })
            .catch((err) => {
                reject({ 'success': false, 'mensagem': 'Erro', 'erro': err })
            })
    })
}