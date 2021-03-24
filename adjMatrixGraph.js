class Graph{
    constructor(numVerts){
        this.adjMatrix=[[]];
        for(let i=0;i<numVerts;i++){
            this.adjMatrix[i] = Array(numVerts).fill(0);
        }
        this.numVerts=numVerts;
    }
    addEdge(i,j){
        this.adjMatrix[i][j]=1;
        this.adjMatrix[j][i]=1;
    }
    print(){
        let str="";
        for(let i=0;i<this.numVerts;i++){
            for(let j=0;j<this.adjMatrix[i].length;j++){
                str+=(this.adjMatrix[i][j]) + " ";
            }
            str+="\n";
        }
        console.log(str);
    }
}
  
let graph = new Graph(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);

graph.print();