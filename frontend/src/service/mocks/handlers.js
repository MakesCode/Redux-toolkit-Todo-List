import { rest } from "msw"
import { tasks } from "../../data/tasks"

export const handlers = [
  rest.get("/tasks", (req, res, ctx) => {
    return res(ctx.json(tasks))
  })
]
