export const truncateText = (text: string, chLimit: number) => {
  return text.length > chLimit ? text.slice(1, chLimit) + '...' : text;
};
