class Solution:
    def maxDistance(self, colors):
        dis = 0
        n = len(colors)

        for i in range(n):
            for j in range(i + 1, n):
                if colors[i] != colors[j]:
                    dis = max(dis, j - i)

        return dis