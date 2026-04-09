import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: createTaskDto.title,
        description: createTaskDto.description,
      },
    });
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  update(id: string, data: { title?: string; description?: string; isCompleted?: boolean }) {
    return this.prisma.task.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}