export const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
};
