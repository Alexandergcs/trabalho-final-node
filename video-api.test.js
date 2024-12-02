
import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

describe("Video API Tests", () => {
  let server;
  let database;

  beforeAll(() => {
    server = fastify();
    database = new DatabaseMemory();

    // Simulando rotas para os testes
    server.post("/videos", async (request, reply) => {
      const { title, description, duration } = request.body;

      database.create({
        title,
        description,
        duration,
      });

      return reply.status(201).send();
    });

    server.get("/videos", async (request) => {
      const search = request.query.search;
      return database.list(search);
    });

    server.put("/videos/:id", async (request, reply) => {
      const videoId = request.params.id;
      const { title, description, duration } = request.body;

      database.update(videoId, {
        title,
        description,
        duration,
      });

      return reply.status(204).send();
    });

    server.delete("/videos/:id", async (request, reply) => {
      const videoId = request.params.id;

      database.delete(videoId);
      return reply.status(204).send();
    });
  });

  afterAll(() => {
    server.close();
  });

  test("Should create a new video", async () => {
    const response = await server.inject({
      method: "POST",
      url: "/videos",
      payload: {
        title: "Test Video",
        description: "This is a test video",
        duration: 120,
      },
    });

    expect(response.statusCode).toBe(201);
  });

  test("Should list all videos", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/videos",
    });

    const videos = JSON.parse(response.payload);
    expect(videos.length).toBeGreaterThan(0);
  });

  test("Should update a video", async () => {
    const videoId = "test-video-id";
    database.create({
      id: videoId,
      title: "Old Title",
      description: "Old Description",
      duration: 90,
    });

    const response = await server.inject({
      method: "PUT",
      url: `/videos/${videoId}`,
      payload: {
        title: "New Title",
        description: "New Description",
        duration: 100,
      },
    });

    expect(response.statusCode).toBe(204);
  });

  test("Should delete a video", async () => {
    const videoId = "delete-video-id";
    database.create({
      id: videoId,
      title: "Title to Delete",
      description: "Description to Delete",
      duration: 60,
    });

    const response = await server.inject({
      method: "DELETE",
      url: `/videos/${videoId}`,
    });

    expect(response.statusCode).toBe(204);
  });
});
