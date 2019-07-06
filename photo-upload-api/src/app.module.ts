import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosController } from './controllers/photos/photos.controller';

@Module({
  imports: [],
  controllers: [AppController, PhotosController],
  providers: [AppService],
})
export class AppModule {}
