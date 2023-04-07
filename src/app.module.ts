import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://arashpwa:9YgSk6UYiyoiWlqN@cluster0.ift1lth.mongodb.net/myFirstCrud?retryWrites=true&w=majority'),ProductModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
