export class Repos {
    constructor(
    public html_url:string,
    public name:string,
    public description:string,
     public language:string,
     public created_at: Date
     
    ) {}
}
export class Search{
    constructor(
        
        public login:string,
        public_repos:Number,
       public followers:Number,
        public following:Number,
       public created_at:Number,
    
    ) {}
}
    