import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Intern",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Intern",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Engineer",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      role: "Engineer",
    },
    {
      id: 5,
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      role: "Admin",
    },
  ];

  findAll(role?: "Intern" | "Engineer" | "Admin") {
    if (role) {
      const roleArray = this.users.filter((user) => user.role === role);
      if (roleArray.length === 0)
        throw new NotFoundException("User role not found");
      return roleArray;
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException("User not found");
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = { id: userByHighestId[0].id + 1, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
