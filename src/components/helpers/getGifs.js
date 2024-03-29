
export const getGifs = async( category) => {

    // encodeURI reemplaza los espacio en blanco x nada
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=j0493nJIwkqf1hodmtVi4n016qZRRz9b`;

    const resp =  await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
                // ? si lo trae 
        }
    })
    return gifs;
}
