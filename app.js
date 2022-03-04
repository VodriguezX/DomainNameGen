
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let diffDom = ['.com', '.url' , '.io'];
let domain = [];


let newDom;
for (let P of pronoun) {
    for (let A of adj) {
        for (let N of noun) {
            for (let D of diffDom) {
                newDom = P + A + N + D;
                console.log(newDom);
            }
        } 
    }

}