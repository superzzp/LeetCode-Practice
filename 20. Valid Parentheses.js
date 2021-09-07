//Using a stack
//One run. Runtime O(n)
var isValid = function(s) {
    const map = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    if (s.length % 2 != 0) {
        return false;
    }
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if(s[i] in map) {
            stack.push(s[i]); 
        }else{
            const c = stack.pop();
            if (s[i] !== map[c]) {
                return false;
            }
        }
    }
    return (stack.length === 0);
};

