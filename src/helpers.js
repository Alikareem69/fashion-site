function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  return randomIndex
}

export { choice }
