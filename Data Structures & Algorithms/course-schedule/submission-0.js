class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        function buildGraph(){
            const inDegree = new Map();
            const adj = new Map();

            for (let i = 0; i < numCourses; i++){
                inDegree.set(i, 0);
                adj.set(i, []);
            }

            for (const [course, prereq] of prerequisites){
                inDegree.set(course, inDegree.get(course) + 1);
                adj.get(prereq).push(course);
            }

        return { map: inDegree, adj };
    }

        function topoSort(){
            const res = [];
            const queue = [];
            const {map, adj} = buildGraph();
            //seed queue with courses that have zero dependencies
            for(let i = 0; i< numCourses;i++){
                if(map.get(i) === 0){
                    queue.push(i);
                }
            }

            //bfs on deps
            while(queue.length > 0){
                const node = queue.shift();
                res.push(node);
                const deps = adj.get(node);
                for(const dep of deps){
                    map.set(dep, map.get(dep) - 1);
                    if(map.get(dep) === 0){
                        queue.push(dep);
                    }
                }
            }

            return res.length === numCourses ? true : false;

        }

        return topoSort();

    }
}
