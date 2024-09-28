import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
const projects = [
    {
        id: 1,
        title: "Prosjekt A",
        description: "Beskrivelse for prosjekt A",
        category: "Web Development",
    },
    {
        id: 2,
        title: "Prosjekt B",
        description: "Beskrivelse for prosjekt B",
        category: "Mobile Development",
    },
    {
        id: 3,
        title: "Prosjekt C",
        description: "Beskrivelse for prosjekt C",
        category: "Design",
    },
];
const app = new Hono();
app.use("/*", cors());
app.get("/projects", (c) => {
    return c.json(projects);
});
app.get('/', (c) => c.json('GET /'));
app.post('/', (c) => c.text('POST /'));
const port = 3000;
console.log(`Server is running on port ${port}`);
serve({
    fetch: app.fetch,
    port,
});
