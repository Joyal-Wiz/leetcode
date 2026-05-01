public class Solution {
    public bool IsValid(string s) {
        Stack<char> stack = new();

        for(int i = 0; i < s.Length; ++i) {
            if(s[i] == '(' || s[i] == '{' || s[i] == '[')
                stack.Push(s[i]);
            else {
                if(stack.Count == 0) return false;

                char lastOpen = stack.Pop();
                if((lastOpen == '(' && s[i] != ')') ||
                   (lastOpen == '{' && s[i] != '}') ||
                   (lastOpen == '[' && s[i] != ']'))
                    return false;
            }
        }

        return stack.Count == 0;
    }
}