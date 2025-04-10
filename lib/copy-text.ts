export async function copyTextToClipBoard(
  text: string,
  { onSuccess, onError }: { onSuccess?: () => void; onError?: () => void }
): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    if (typeof onSuccess === 'function') {
      onSuccess();
    }
  } catch (error) {
    console.error(error);
    if (typeof onError === 'function') {
      onError();
    }
  }
}
