import { useEffect, useState } from "react";

function ListaUsuarios() {
    const   [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((respostas) => respostas.json())
            .then((dados) => setUsuarios(dados));
    }, []);
    return (
        <div>
            <h1>Lista de Usuários</h1>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>
                        {usuario.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaUsuarios;