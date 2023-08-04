import { Module } from '@nestjs/common';

import { CoreModule } from '@i-mage/core';

@Module({
  imports: [CoreModule],

})
export class AppModule {}
