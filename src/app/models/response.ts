export interface ResponseMessage{
    Message: string;
    Success: boolean;
}

export interface ResponseMessageData<T>{
    Message: string;
    Success: boolean;
    Data: T;
}