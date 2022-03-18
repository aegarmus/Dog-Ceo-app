

export const getBreeds = async() => {

    const url = 'https://dog.ceo/api/breeds/list/all'
    const resp = await fetch( url );
    const breeds  = await resp.json();

    return breeds.message
}

export const dogImg = async (breeds) => {
    
   
    const imgUrls = breeds.map (breed => (`https://dog.ceo/api/breed/${breed}/images`))

    const images = [] 
    for (const url of imgUrls) {
       const breedImgs = await fetch (url)
       const breedImg = await breedImgs.json ()
       images.push(...breedImg.message)
    }

    return (images)

}
