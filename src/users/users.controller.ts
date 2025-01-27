import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";

@Controller("users")
export class UsersController {
  //get all users
  @Get()
  findAll(@Query("role") role?: "Intern" | "Engineer" | "Admin") {
    return [];
  }

  //get user by id
  @Get(":id")
  findOne(@Param("id") id: string) {
    return { id };
  }

  //post users
  @Post()
  create(@Body() user: {}) {
    return user;
  }

  //put users
  @Patch(":id")
  update(@Param("id") id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  //delete users
  @Delete(":id")
  delete(@Param("id") id: string) {
    return { id };
  }
}
