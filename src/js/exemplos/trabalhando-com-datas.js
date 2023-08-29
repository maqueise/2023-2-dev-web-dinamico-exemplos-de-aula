
let dataPublicacao = new Date('2023-08-15 10:20:33')

// API Internacionalization

console.log(
    Intl.DateTimeFormat('pt-BR',{
        dateStyle:"long",
        timeZone:"America/Campo_Grande",
        timeStyle:'short'
    }).format(dataPublicacao)
)