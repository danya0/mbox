import genres from "~/constants/genres";

export function isExistGenre(genre) {
  let valid = false
  Object.keys(genres).forEach(key => genres[key] === genre ? valid = true : null)
  return valid
}
