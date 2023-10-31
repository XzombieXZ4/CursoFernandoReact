export const getGifts = async (category) => {
  const api_key = "ci87TJo8LAcQM7JAlKYdYITATjzI58PJ";
  const link = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=20`;
  const resp = await fetch(link);
  const { data } = await resp.json();
  const img = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return img;
};
