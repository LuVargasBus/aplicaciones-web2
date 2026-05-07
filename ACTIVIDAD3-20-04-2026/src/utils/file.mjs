import fsp from 'node:fs/promises';

export async function saveJSON(path, data) {
  await fsp.writeFile(path, JSON.stringify(data, null, 2));
}

export async function readJSON(path) {
  const content = await fsp.readFile(path, "utf-8");
  return JSON.parse(content);
}