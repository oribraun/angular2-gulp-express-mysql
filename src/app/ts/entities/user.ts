import {Entity} from "./entity";
/**
 * Created by ori on 4/20/2017.
 */

export class User extends Entity{
    private _email: string;


    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}
