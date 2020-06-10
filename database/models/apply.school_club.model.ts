import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export default class Apply extends Model<Apply> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public pk: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  public classNum: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  public studentNum: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  public password: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public passwordKey: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public phoneNumber: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public field: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  public content: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  public reason: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  public language: string;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  public isSubmit: boolean;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;

}