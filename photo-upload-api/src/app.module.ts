import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosController } from './controllers/photo-upload/photos.controller';

@Module({
  imports: [],
  controllers: [AppController, PhotosController],
  providers: [AppService],
})
export class AppModule {}
