/**
 * Get the HEX color of the programming language base on their name.
 */
export function getLanguageColor(
  targetLanguageName: string,
  // the array like object that contains the programming language name and color
  languageList: {
    programmingLanguageName: string;
    programmingLanguageColor: string;
  }[]
): string {
  const languageColor = languageList.find(
    ({ programmingLanguageName }) =>
      programmingLanguageName === targetLanguageName
  );
  return languageColor ? languageColor.programmingLanguageColor : '#FFFFFF';
}
