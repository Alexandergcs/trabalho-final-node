import { sql } from './db.js';

(async () => {
    try {
        // Criar a tabela de vídeos
        await sql`
        CREATE TABLE videos (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            duration INTEGER NOT NULL
        );`;
        console.log('Tabela videos criada com sucesso!');
    } catch (err) {
        console.error('Erro ao criar a tabela:', err);
    } finally {
        sql.end(); // Fecha a conexão com o banco
    }
})();


// (async () => {
//     try {
//         // Excluir a tabela se ela existir
//         await sql`DROP TABLE IF EXISTS videos;`;
//         console.log('Tabela Apagada!');
//     } catch (err) {
//         console.error('Erro ao apagar a tabela:', err);
//     } finally {
//         sql.end(); // Fecha a conexão com o banco
//     }
// })();
