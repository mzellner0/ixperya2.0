export const clampValue = (num, min, max) => {
  return num <= min ? min : num >= max ? max : num
}

// On renvoie un nombre aléatoire entre une valeur min (incluse) 
// et une valeur max (exclue)
export const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
}

export const getPosNeg = () => {
  return Math.round(Math.random()) * 2 - 1
}