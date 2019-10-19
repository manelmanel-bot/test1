const readline=require('readline')



 // remplissage du tableau   a corriger


// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question("remplir votre tableau de 1 et 0 ", function(answer) {
//     console.log( answer);
//
//     var k=0;
//     var ta=[];
//
//     do {
//         k = k + 1;
//         ta.push(r1);
//     } while ((ta[k]!=0)||(ta[k]!=0));
//
//     rl.close();
// });






// la fonctio

var indice;
var i=0;//indice tableau
var s=0;//longueur des listes
var max=0;//longueur du liste du max taille

var tableau = [0,0,0,0];




function exer(tab) {
    do {
        if(tab[i]==1)
        {
            s=s+1;
            i=i+1;

        }
        else if (tab[i]==0)
        {
            if (s>max)
            {
                max=s;
                indice=i;
            }

            s=0;
            i=i+1;

        }
    } while (i<tab.length);

    if(indice==tab.length)
    {
        return(indice-max)
    } else if (max==0)
    {
        return(tab.length-1);

    }
    else{
        return(indice)
    }
}

console.log(exer(tableau));