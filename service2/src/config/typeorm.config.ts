import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "test",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: false,
  "migrations": ["dist/migrations/*{.ts,.js}"],
  "migrationsTableName": "migrations_typeorm",
  "migrationsRun": true
};
