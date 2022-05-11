import "reflect-metadata"
import { DataSource } from "typeorm"
import { Class } from "./entity/Class"
import { Category } from "./entity/Category"
import { Tag } from "./entity/Tag"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "database",
    synchronize: true,
    logging: true,
    entities: [Class, Category, Tag],
    subscribers: [],
    migrations: ["src/migrations/**/*{.ts,.js}"],
})

AppDataSource.initialize()
    .then(() => {})
    .catch((error) => console.log(error))