import { getUsers } from "../services/api.mjs";
import { saveJSON, readJSON } from "../utils/file.mjs";
import { routeUsers } from "../utils/paths.mjs";

// 👉 /users
export async function handleUsers(req, res) {
  try {
    const users = await getUsers();

    await saveJSON(routeUsers, users);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users));

  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end("Error obteniendo usuarios");
  }
}

// 👉 /users/filtrados
export async function handleFilteredUsers(req, res) {
  try {
    const data = await readJSON(routeUsers);

    const filteredUsers = data.filter(u => u.id < 10);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(filteredUsers));

  } catch (error) {
    
    res.statusCode = 404  ;
    res.setHeader("Content-Type", "text/plain");
    res.end("Primero debes ejecutar /usuarios para guardar los datos en el archivo JSON");
  }
}