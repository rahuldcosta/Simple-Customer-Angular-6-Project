
export class Customer {
    private _id: Number;
    private _userName: String;
    private _emailId: String;
    private _phoneNo: Number;
    private _website: String;
    private _userPostList: Array<String>;

    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }

    public get userName(): String {
        return this._userName;
    }
    public set userName(value: String) {
        this._userName = value;
    }

    public get emailId(): String {
        return this._emailId;
    }
    public set emailId(value: String) {
        this._emailId = value;
    }
    public get phoneNo(): Number {
        return this._phoneNo;
    }
    public set phoneNo(value: Number) {
        this._phoneNo = value;
    }
    public get website(): String {
        return this._website;
    }
    public set website(value: String) {
        this._website = value;
    }
    public get userPostList(): Array<String> {
        return this._userPostList;
    }
    public set userPostList(value: Array<String>) {
        this._userPostList = value;
    }

}
