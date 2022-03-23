import { Request, Response } from "express";
import { ListCalendarService } from "../services/ListCalendarService";

class ListCalendarController {
  async handle(request: Request, response: Response) {
    const listCalendarService = new ListCalendarService();
    const calendar = await listCalendarService.execute();
    return response.json(calendar);
  }
}

export { ListCalendarController };
