import { Product } from './product.class';

export interface Response{
    status : number;
    status_message : string;
    data : Product;
}