import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "fs";
import path from "path";

const app = new Hono();
app.use("/*", cors());

const projectsFilePath = path.join(__dirname, "ProjectData.json");

const initFile = async () => {
  if (!existsSync(projectsFilePath)) {
    await writeFile(projectsFilePath, JSON.stringify([]));
  }
};

initFile();

const handleError = (error, message, c) => {
  console.error(message, error);
  return c.json({ message, error: error.message }, 500);
};

app.get("/projects", async (c) => {
  try {
    const data = await readFile(projectsFilePath, "utf-8");
    return c.json(JSON.parse(data));
  } catch (error) {
    return handleError(error, "Feil under lesing av data", c);
  }
});

app.post("/projects", async (c) => {
  try {
    const newProject = await c.req.json();
    const parsedData = JSON.parse(await readFile(projectsFilePath, "utf-8"));
    
    newProject.Id = parsedData.length + 1;
    parsedData.push(newProject);
    await writeFile(projectsFilePath, JSON.stringify(parsedData, null, 2));

    return c.json(parsedData);
  } catch (error) {
    return handleError(error, "Feil under skriving av data", c);
  }
});

const port = 3999;
console.log(`Server kjører på http://localhost:${port}`);

serve({ fetch: app.fetch, port });