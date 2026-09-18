# Karpathy-Inspired Coding Guidelines

## 1. Think Before Coding
- Surface assumptions and confusion upfront
- If multiple interpretations exist, present them - don't pick silently
- Ask clarifying questions rather than making silent assumptions

## 2. Simplicity First
- Write minimal code solving only the stated problem
- No features beyond what was asked
- No abstractions for single-use code
- Benchmark: would a senior engineer call the approach overcomplicated?

## 3. Surgical Changes
- Make focused edits matching existing patterns
- Every changed line should trace directly to the user's request
- Prevents scope creep into unrelated improvements

## 4. Goal-Driven Execution
- Convert requirements into testable success criteria before implementation
- Rather than vague goals like "make it work," define specific verification steps
- Example: "Write tests for invalid inputs, then make them pass"
