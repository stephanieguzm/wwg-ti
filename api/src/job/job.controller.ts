import { Controller, Get, Query } from '@nestjs/common';
import { Job } from './entities/job.entity';
import { JobService } from './job.service';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  public async getCurrentJobs(@Query() expiredAt: Date | null) : Promise<Job[]> {
    return this.jobService.findCurrentJobs(expiredAt);
  }
}