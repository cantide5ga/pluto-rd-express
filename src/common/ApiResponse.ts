import * as http from 'http';

//TODO gzip

export class ApiResponse {
    
    public code: number;
    public payload: any;
    
    constructor(code: number, value?: string) {
        this.code = code;
        if(code < 400) {
            this.payload = {
                data: value || null
            }
        } else {
            this.payload = {
                error: {
                    code: code,
                    message: value || http.STATUS_CODES[code]
                }
            }
        }
    }
       
    public static OK(data: any): ApiResponse {       
        return new this(200, data);
    }
    
    public static CREATED(): ApiResponse {
        return new this(201);
    }
    
    public static NOT_FOUND(message?: any): ApiResponse {
        return new this(404); 
    }  
}
    
