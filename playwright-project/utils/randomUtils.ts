import { faker } from '@faker-js/faker';

export class RandomUtils {
   static email(): string {
        return faker.internet.email();
    }


    static firstName(): string {
        return faker.person.firstName();
    }

    static lastName(): string {
        return faker.person.lastName();
    }
    static getTodayDate(): string {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        return `${month}/${day}/${year}`;

}}