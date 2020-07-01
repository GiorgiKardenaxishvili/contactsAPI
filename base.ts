export interface IBase {
    creationDate: Date;
    lastUpdate: Update;
    deleted: Delete;
    isHidden:boolean;
}

export enum DeleteStatus {
    notDeleted = 0,
    deletedDefault = 1,
    deletedNoreturnPossible = 2,
    willBeDeletedForever = 3,
}

export class Delete{
    status:DeleteStatus = 0;
    deleteDate?:number;
}

export class Update{
    date:Date = new Date();
    change:string = "";
}