import { AppDataSource } from "../data-source";
import { user } from "../entities/User";

export const userRepository = AppDataSource.getRepository(user)