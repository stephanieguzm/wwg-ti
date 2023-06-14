import { AppConfigurationService } from "./app-configuration.service";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

//creates @Module class to use the app configuration service w/i the project
@Module({
  exports: [AppConfigurationService],
  imports: [ConfigModule.forRoot()],
  providers: [AppConfigurationService]
})
export class AppConfigurationModule {}
