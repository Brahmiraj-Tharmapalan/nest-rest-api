import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { EmploueesService } from "./emplouees.service";
import { Prisma } from "@prisma/client";

@Controller("employees")
export class EmploueesController {
  constructor(private readonly emploueesService: EmploueesService) {}

  @Post()
  create(@Body() createEmploueeDto: Prisma.EmployeeCreateInput) {
    return this.emploueesService.create(createEmploueeDto);
  }

  @Get()
  findAll(@Query("role") role?: "Intern" | "Engineer" | "Admin") {
    return this.emploueesService.findAll(role);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.emploueesService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEmploueeDto: Prisma.EmployeeUpdateInput
  ) {
    return this.emploueesService.update(+id, updateEmploueeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.emploueesService.remove(+id);
  }
}
