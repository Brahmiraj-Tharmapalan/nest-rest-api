import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class EmploueesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createEmploueeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({ data: createEmploueeDto });
  }

  async findAll(role?: "Intern" | "Engineer" | "Admin") {
    if (role)
      this.databaseService.employee.findMany({
        where: {
          role,
        },
      });
    return this.databaseService.employee.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateEmploueeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id,
      },
      data: updateEmploueeDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where: {
        id,
      },
    });
  }
}
