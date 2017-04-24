/**
 * Created by ori on 4/20/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entity = (function () {
    function Entity() {
        this._id = 0;
        this._created = '';
        this._modified = '';
    }
    Object.defineProperty(Entity.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "created", {
        get: function () {
            return this._created;
        },
        set: function (value) {
            this._created = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "modified", {
        get: function () {
            return this._modified;
        },
        set: function (value) {
            this._modified = value;
        },
        enumerable: true,
        configurable: true
    });
    return Entity;
}());
exports.Entity = Entity;

//# sourceMappingURL=entity.js.map
