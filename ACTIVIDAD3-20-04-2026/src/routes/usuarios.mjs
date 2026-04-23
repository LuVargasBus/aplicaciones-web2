import { getUsers } from "../services/api.mjs";
import { saveJSON, readJSON } from "../utils/file.mjs";
import { routeUsers } from "../utils/paths.mjs";

export async function handleUserData(req, res, filtered = false) {
  try {
    if (!filtered) {
      // 1. fetch
      const users = await getUsers();

      // 2. guardar
      await saveJSON(routeUsers, users);

      // 3. leer y enviar
      const data = await readJSON(routeUsers);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(data));
    }

    // filtered
    try {
      const data = await readJSON(routeUsers);

      const filtered = data.filter(u => u.id < 10);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(filtered));

    } catch {
      res.writeHead(400, { "Content-Type": "text/plain" });
      return res.end("Primero debes ejecutar /users");
    }

  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Error procesando users");
  }
}