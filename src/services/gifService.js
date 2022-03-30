
const giphy_api_key='QUVkEfrqtDFSg4kdsWIiDuE1pfZItSdR';

export const getGifs = async (cat) => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?key=${giphy_api_key}&q=${encodeURI(cat)}&limit=3`)
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
};

