import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '@prisma/client';
import { CreateTaskDto } from './dto/create-task.body.dto';
import { UpdateTaskDto } from './dto/update-task.body.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Post('')
  async create(@Body() data: CreateTaskDto): Promise<Todo> {
    return this.todoService.createTask(data);
  }
  @Get('')
  async getAll(): Promise<Todo[]> {
    return this.todoService.getAllTasks();
  }
  @Delete('/:id')
  async deleteTodo(@Param('id') id: string): Promise<Todo> {
    return this.todoService.deleteTask(+id);
  }
  @Put('/:id')
  async complete(@Param('id') todoId: string, @Body() data: UpdateTaskDto) {
    return this.todoService.updateTask(+todoId, data);
  }
  @Get('statuses')
  getAllStatuses() {
    return this.todoService.getAllStatuses();
  }
}
