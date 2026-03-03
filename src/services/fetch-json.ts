export async function fetchJson<Type>(url: string): Promise<Type> {
  const response = await fetch(url)

  if (!response.ok) throw new Error(`Request failed: ${response.status}`)

  return response.json() as Promise<Type>
}