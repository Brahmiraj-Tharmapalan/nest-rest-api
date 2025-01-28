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
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //get all users
  @Get()
  findAll(@Query("role") role?: "Intern" | "Engineer" | "Admin") {
    return this.usersService.findAll(role);
  }

  //get user by id
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  //post users
  @Post()
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: "Intern" | "Engineer" | "Admin";
    }
  ) {
    return this.usersService.create(user);
  }

  //put users
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role?: "Intern" | "Engineer" | "Admin";
    }
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  //delete users
  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.usersService.delete(+id);
  }
}
