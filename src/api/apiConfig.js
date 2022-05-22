const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ad67dee241536ac0bb7d4bd83d46f831',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;