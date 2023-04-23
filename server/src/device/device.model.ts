import { ApiProperty } from '@nestjs/swagger';
import { Column, Table, Model, DataType } from 'sequelize-typescript';

interface ICreateDevice {
  title: string;
  price: number;
  description: string;
}

@Table({ tableName: 'devices' })
export class Device extends Model<Device, ICreateDevice> {
  @ApiProperty({
    example: 'a037232f-648b-4a05-905e-4ec8d1474d07',
    description: 'UUID',
  })
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    unique: true,
  })
  id: string;

  @ApiProperty({ example: 'Samsung Galaxy 22', description: 'Device title' })
  @Column({ type: DataType.STRING })
  title: string;

  @ApiProperty({
    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Device description',
  })
  @Column({ type: DataType.STRING })
  description: string;

  @ApiProperty({ example: 12000, description: 'Device price' })
  @Column({ type: DataType.INTEGER })
  price: number;
}
