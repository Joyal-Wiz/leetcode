public class Solution {
    public int MinScore(int n, int[][] roads) {

      List<List<(int,int)>> graph =new();

      for (int i = 0; i <= n; i++)
        graph.Add(new());

    foreach(var road in roads){
        graph[road[0]].Add((road[1], road[2]));
        graph[road[1]].Add((road[0], road[2]));
    }
     
      bool[] visited=new bool[n + 1];
      Queue<int> que =new();
      que.Enqueue(1);
     int ans = int.MaxValue;
    while(que.Count>0){
        int city = que.Dequeue();
        if(visited[city]) continue;
        
        visited[city]=true;
        foreach(var (next, dist) in graph[city]){
             ans = Math.Min(ans, dist);

             if(!visited[next])  que.Enqueue(next);
        }
    }
   

   return ans;
    }
}