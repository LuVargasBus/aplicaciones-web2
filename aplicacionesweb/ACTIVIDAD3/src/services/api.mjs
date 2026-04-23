export async function getUsers() {
  const response = await fetch("https://api.escuelajs.co/api/v1/users");
  const data = await response.json();
  return data;
}