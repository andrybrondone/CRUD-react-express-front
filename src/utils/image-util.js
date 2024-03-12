function getImageURL(name) {
  return new URL(`../assets/vehicle/${name}`, import.meta.url).href
}

export { getImageURL }
