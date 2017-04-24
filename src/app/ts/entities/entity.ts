/**
 * Created by ori on 4/20/2017.
 */

export class Entity {
    private _id: number;
    private _created: string;
    private _modified: string;

    constructor() {
        this._id = 0;
        this._created = '';
        this._modified = '';
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get created(): string {
        return this._created;
    }

    set created(value: string) {
        this._created = value;
    }

    get modified(): string {
        return this._modified;
    }

    set modified(value: string) {
        this._modified = value;
    }
}
