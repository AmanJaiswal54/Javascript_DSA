// Undirected, Unweighted Graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
    console.log("addVertex", this.adjacencyList);
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    console.log("addEdge", this.adjacencyList);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => {
      return v !== vertex2;
    });

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => {
      return v !== vertex1;
    });

    console.log("removeEdge", this.adjacencyList);
  }

  removeVertex(vertex) {
    let vertexArr = this.adjacencyList[vertex];
    vertexArr.map((v) => {
      return this.removeEdge(v, vertex);
    });
    delete this.adjacencyList[vertex];

    console.log("removeVertex", this.adjacencyList);
  }

  depthFirstTraverseUsingRecusion(startVertex) {
    let visited = {};
    let result = [];
    const helper = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);
      let connectedVertex = this.adjacencyList[vertex];
      connectedVertex.forEach((vertex) => {
        if (!visited[vertex]) {
          helper(vertex);
        }
      });
    };
    helper(startVertex);
    console.log("depthFirstTraverseUsingRecusion Result", result);
  }
}

let graphInstance = new Graph();
graphInstance.addVertex("A");
graphInstance.addVertex("B");
graphInstance.addVertex("C");
graphInstance.addVertex("D");
graphInstance.addVertex("E");

graphInstance.addEdge("A", "B");
graphInstance.addEdge("A", "C");
graphInstance.addEdge("A", "D");
graphInstance.addEdge("A", "E");
graphInstance.addEdge("B", "C");
graphInstance.addEdge("C", "D");
graphInstance.addEdge("C", "E");
graphInstance.addEdge("D", "E");

graphInstance.removeEdge("A", "E");

graphInstance.removeVertex("E");

graphInstance.depthFirstTraverseUsingRecusion("A");
console.log(
  "depthFirstTraverseUsingRecusion Result",
  `
      A
    / | \
    B |  D
    \ | /
      C
      `
);
