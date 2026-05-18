class Solution
{
    public int MinJumps(int[] arr)
    {
        int n = arr.Length;
        if (n == 1) return 0;

        Dictionary<int, List<int>> graph = new Dictionary<int, List<int>>();
        for (int i = 0; i < n; i++)
        {
            if (!graph.ContainsKey(arr[i]))
                graph[arr[i]] = new List<int>();
            graph[arr[i]].Add(i);
        }

        Queue<int> queue = new Queue<int>();
        bool[] visited = new bool[n];
        int steps = 0;
        
        queue.Enqueue(0); 
        visited[0] = true;

        while (queue.Count > 0)
        {
            int levelSize = queue.Count;

            for (int i = 0; i < levelSize; i++)
            {
                int index = queue.Dequeue();
                if (index == n - 1) return steps;

                if (index + 1 < n && !visited[index + 1])
                {
                    queue.Enqueue(index + 1);
                    visited[index + 1] = true;
                }

                if (index - 1 >= 0 && !visited[index - 1])
                {
                    queue.Enqueue(index - 1);
                    visited[index - 1] = true;
                }

                if (graph.ContainsKey(arr[index]))
                {
                    foreach (int nextIndex in graph[arr[index]])
                    {
                        if (nextIndex != index && !visited[nextIndex])
                        {
                            queue.Enqueue(nextIndex);
                            visited[nextIndex] = true;
                        }
                    }
                    graph[arr[index]].Clear();
                }
            }
            steps++;
        }

        return -1; 
    }
}