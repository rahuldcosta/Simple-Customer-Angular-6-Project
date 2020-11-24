export class Post {
     _userId: number;
     _id: number;
     _title: String;
     _body: String;

    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get title(): String {
        return this._title;
    }
    public set title(value: String) {
        this._title = value;
    }
    public get body(): String {
        return this._body;
    }
    public set body(value: String) {
        this._body = value;
    }
}
