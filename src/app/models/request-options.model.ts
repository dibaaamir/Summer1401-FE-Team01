export interface RequestOptions {
    url: string;
    init?: RequestInit;
    showSnackbar?: boolean;
}

export interface GetRequestOptions extends RequestOptions {}

export interface PostRequestOptions extends RequestOptions {
    body: any;
}
