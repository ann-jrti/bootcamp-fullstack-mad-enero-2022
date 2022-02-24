const getCocktails = async (url) => {
    const results = await fetch(url)
    const data = await results.json()
    return data.drinks
}

export default getCocktails;