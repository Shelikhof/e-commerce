import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {
  @ApiProperty({ example: 'Samsung Galaxy 22', description: 'Device title' })
  readonly title: string;

  @ApiProperty({ example: 12000, description: 'Device price' })
  readonly price: number;

  @ApiProperty({
    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Device description',
  })
  readonly description: string;
}
