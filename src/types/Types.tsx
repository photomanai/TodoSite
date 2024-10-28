export interface TodoInitialState {
    todos : TodoType[],
    id:number,
}

export interface TodoType {
    id: number,
    content:string
}