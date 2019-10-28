import { Episode } from './models/episode.model';
import { Course } from './models/course.model';
import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';

const models = TypegooseModule.forFeature([
  User,
  Course,
  Episode,
]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/blacktea', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule { }
