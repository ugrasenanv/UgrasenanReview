class Authors {
    name: string;
}

export const AUTHORSNAMES: Authors[] = [{
    "name" : "Ugrasenan"
}, {
    "name" : "Vellaichamy"
},
{
    "name" : "Anna"
},
{
    "name" : "Aannaies"
}
];

export class test {    
    newdata : any = AUTHORSNAMES;
    ngOnInit() {  
        return this.newdata;
    }
}