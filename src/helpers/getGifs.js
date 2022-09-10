 export const getGifs = async (catgory) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZEVbs3tPFJfbOw39AgJMbH6jleR8ElDG&q=${catgory}&limit=2`
    const reply = await fetch(url)
    const { data } = await reply.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })
    )
    return gifs

}