import { Module } from '@nestjs/common';
import { HttpModule } from '../../../../packages/http';
import { TestClient } from './test.client';

@Module({
    imports: [
        HttpModule.forRoot(),
    ],
    providers: [TestClient],
})
export class AppModule {
}
