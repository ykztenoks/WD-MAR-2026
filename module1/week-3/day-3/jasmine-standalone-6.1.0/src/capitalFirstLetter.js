function capitalizeFirstLetter(word) {
  if (typeof word === "number" || !word) {
    return "Not Valid";
  }
  const capitalWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return capitalWord;
}
