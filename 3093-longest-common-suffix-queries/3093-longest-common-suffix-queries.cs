public class Solution
{
    class TrieNode{
        public TrieNode[] Next = new TrieNode[26];
        public int Index = -1;
    }

    public int[] StringIndices(string[] wordsContainer, string[] wordsQuery) {
        TrieNode root = new TrieNode();

        int bestGlobal = 0;

        for (int i = 1; i < wordsContainer.Length; i++){
            if (wordsContainer[i].Length < wordsContainer[bestGlobal].Length)
                bestGlobal = i;
        }

        for (int i = 0; i < wordsContainer.Length; i++){
            string word = Reverse(wordsContainer[i]);

            TrieNode node = root;

            Update(node, i, wordsContainer);

            foreach (char c in word){
                int idx = c - 'a';

                if (node.Next[idx] == null)
                    node.Next[idx] = new TrieNode();

                node = node.Next[idx];

                Update(node, i, wordsContainer);
            }
        }

        int[] ans = new int[wordsQuery.Length];

        for (int i = 0; i < wordsQuery.Length; i++){
            string query = Reverse(wordsQuery[i]);

            TrieNode node = root;

            int best = root.Index;

            foreach (char c in query){
                int idx = c - 'a';

                if (node.Next[idx] == null)
                    break;

                node = node.Next[idx];

                best = node.Index;
            }

            ans[i] = best;
        }

        return ans;
    }

    void Update(TrieNode node, int index, string[] words){
        if (node.Index == -1 ||
            words[index].Length < words[node.Index].Length){
            node.Index = index;
        }
    }

    string Reverse(string s){
        char[] arr = s.ToCharArray();
        Array.Reverse(arr);
        return new string(arr);
    }
}