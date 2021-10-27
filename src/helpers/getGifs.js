
export const getGifs = async (category) => {        
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HJcFOp9n4m4ELbiAdmXh6dc9Z20Q5DnU&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en`;
    console.log("URL: ", url);
    const resp  = await fetch(url);
    const { data } = await resp.json();
    
    const gifts = data.map( img =>  {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }            
    });
    
    return gifts;
}    


