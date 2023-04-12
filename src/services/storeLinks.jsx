//Buscar links salvos

export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves =JSON.parse(myLinks) || []

    return linksSaves
}

// Salvar link no localStorage

export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key)

    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('Link já existe')
        return
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('link salvo com sucesso')
}

