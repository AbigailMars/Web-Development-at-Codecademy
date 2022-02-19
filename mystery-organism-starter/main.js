// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function PAequorFactory(specimenNum,dna){
  return {specimenNum: specimenNum,
          dna: dna,
          mutate(){
            let mutate = Math.floor(Math.random() * 15);
            let dnaBase = this.dna[mutate];
            console.log('mutate: ' + mutate);
            console.log('dnaBase: ' + dnaBase);
            let newdnaBase = returnRandBase();
            while(newdnaBase == dnaBase){
              newdnaBase = returnRandBase();
            }
            console.log('newdnaBase: ' + newdnaBase);
            this.dna[mutate] = newdnaBase;
            return dna;
          },
          compareDNA(pAequor){
            let same = 0;
            for(let i = 0; i < 15; i++){
              if(pAequor.dna[i] == this.dna[i]){
                same++;
              }
            }
            console.log("same: " + same);
            let percentage = same / 15; 
            console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage} DNA in common` );
          },
          willLikelySurvive(){
            let CG = 0;
            for(let i = 0; i < 15; i++){
              if(this.dna[i] == 'C' || this.dna[i] == 'G'){
                CG++;
              }
            }
            let CGPossibility = CG / 15;
            return (CGPossibility > 0.6);
          }
        };  
}

let randomStrand = PAequorFactory(1,mockUpStrand());
let pAequpr = randomStrand.dna;
console.log(pAequpr); 
console.log(randomStrand.compareDNA(PAequorFactory(2,mockUpStrand())));
console.log(randomStrand.willLikelySurvive());


//create 30 instances
let pAequors = [];
for (let i = 0; i < 31; i++){
  let randomStrand = PAequorFactory(i,mockUpStrand());
  while(!randomStrand.willLikelySurvive()){
    randomStrand = PAequorFactory(i,mockUpStrand())
  }
  pAequors.push(randomStrand);
}

console.log(pAequors);

