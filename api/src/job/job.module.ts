import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { JobSchema } from './job.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Job', schema: JobSchema
    }])
  ],
  controllers: [JobController],
  providers: [JobService]
})
export class JobModule {}
