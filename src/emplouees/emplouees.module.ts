import { Module } from "@nestjs/common";
import { EmploueesService } from "./emplouees.service";
import { EmploueesController } from "./emplouees.controller";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [EmploueesController],
  providers: [EmploueesService],
})
export class EmploueesModule {}
