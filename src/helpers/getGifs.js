export const getGifs = async(category) =>{ // es async porque estamos usando fetch
    const url=  `https://api.giphy.com/v1/gifs/search?apikey=dvbXVpZli7r5w1EWuTn0an6497fDSfPT&q=${category}&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();
    /* console.log(data); */
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs;



    
}