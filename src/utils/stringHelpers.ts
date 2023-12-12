export function capitaliseFirstChar(word: string): string {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

export function capitaliseFirstCharacters(sentence: string): string {
  const strings = sentence.split(' ');
  const capitalisedWords = strings
    .map((word) => capitaliseFirstChar(word))
    .join(' ')
    .trim();

  return capitalisedWords;
}
