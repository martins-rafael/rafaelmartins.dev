export const removeHtml = (html: string): string => {
  let data = html.replace(/&lt;.*&gt;/gi, '');
  data = data.replace(/&lt;\/.*&gt;/gi, '');
  data = data.replace(/<[^>]*>/gi, '');
  data = data.replace(/<\/[^>]*>/gi, '');
  return data;
};
