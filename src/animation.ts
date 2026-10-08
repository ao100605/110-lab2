
export function Bold(inputFeature: string){
   console.log(`\x1b[1m${inputFeature}\x1b[0m`); // Bold


}

export function Italisize(inputFeature: string){
    console.log(`\x1b[3m${inputFeature}\x1b[0m`); // Italic
}


Bold("PARTY")
Italisize("AAAAAAAAAA")

