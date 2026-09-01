class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for c in tokens:
            if c == "+":
                print("before +:", stack)
                stack.append(stack.pop() + stack.pop())
                print("after +:", stack)
            elif c == "-":
                print("before -:", stack)
                num1 = stack.pop()
                num2 = stack.pop()
                stack.append(num2 - num1)
                print("after -:", stack)
            elif c == "*":
                print("before *:", stack)
                stack.append(stack.pop() * stack.pop())
                print("after -:", stack)
            elif c == "/":
                print("before /:", stack)
                num1 = stack.pop()
                num2 = stack.pop()
                stack.append(math.trunc(num2 / num1))
                print("after /:", stack)
            else:
                stack.append(int(c))
            
        return stack[0]
