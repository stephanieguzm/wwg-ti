import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from '../job/job.schema';
import { Model } from 'mongoose';

@Injectable()
export class JobService {
  constructor(@InjectModel(Job.name) private readonly jobModel: Model<Job>) {}
  
  async findCurrentJobs(expiredAt: Date | null ) : Promise<Job[]> {
    const jobs = await this.jobModel.find({ expiredAt : null }).exec()
    return jobs
  }

}
