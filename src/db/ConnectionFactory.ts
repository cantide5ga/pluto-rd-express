import { Connection } from './common/Connection';
import { MySqlConnection } from './mysql/MySqlConnection';

export const of = (vendor: Vendor): Connection => {
    switch(vendor) {
    case Vendor.MYSQL:
        return new MySqlConnection();
    }
}

export enum Vendor {
    MYSQL
}