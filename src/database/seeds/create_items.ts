import knex, { Knex } from "knex";

export async function seed(Knex: Knex){
    // await knex('items').insert([
    //     {title: "Papéis e papelão", image: "papel.png" },
    //     {title: "Vidros e Lâmpadas", image: "vidro.png" },
    //     {title: "Óleo de Cozinha", image: "oleo.png" },
    //     {title: "Resíduos Orgânicos", image: "organico.png" },
    //     {title: "Baterias e Pilhas", image: "bateria.png" },
    //     {title: "Eletrônicos", image: "eletronico.png" },
    // ]);
    await knex('items').insert({});
};
