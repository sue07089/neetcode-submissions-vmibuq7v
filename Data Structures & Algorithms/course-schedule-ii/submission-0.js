class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {

        // 0 <- 1, 0 depends on 1

        function buildGraph(){
            const inDegrees = new Map(); //map of courses and indegree number 
            const adjList = new Map(); // map of courses and the dependency list ie, mirror image of inDegree, 
            //what becomes available when course is taken

            //seed the maps
            for(let i =0; i < numCourses; i++){
                inDegrees.set(i, 0);
                adjList.set(i, []);
            }

            //increment the counter and add deps
            for(let i =0; i <  prerequisites.length; i++ ){
                const [course, prereq] = prerequisites[i];
                inDegrees.set(course,  inDegrees.get(course) + 1);
                adjList.get(prereq).push(course);
            }
            return { inDegrees, adjList };
        }

        const order = [];

        const queue = [];
        const {inDegrees, adjList} = buildGraph();

        //seed queue with courses that have 0 indegrees

        for(let i =0; i < numCourses; i++){
            if(inDegrees.get(i) === 0){
                queue.push(i);
            }
        }

        //bfs
        while(queue.length > 0){
            const node = queue.shift();
            const deps = adjList.get(node);
            order.push(node);
            for(const dep of deps){
                inDegrees.set(dep, inDegrees.get(dep) - 1);
                if(inDegrees.get(dep) === 0){
                    queue.push(dep)
                }
            }


        }

       return order.length === numCourses ? order : [];
    }
}
