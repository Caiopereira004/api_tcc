import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('api_tcc')
    .setDescription('Api para o aplicativo BeCare, conectando o frontend ao banco de dados')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('doc', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
