# AI-Assisted Engineering Workflow Assessment

Date: 22 July 2026

## Question 1

> Is the way I am working with AI more like vibe coding or agentic
> engineering?

### Result

The workflow is much closer to **agentic engineering** than vibe coding. More
specifically, it can be described as **supervised agentic software
engineering**.

The user retains control of the implementation through:

- written plans and numbered steps;
- legacy behavior and persistence contracts;
- small, explicitly authorized changes;
- static checks and manual runtime validation;
- versioned checkpoints;
- documentation and handoff records; and
- strict scope boundaries between profiles.

Vibe coding usually focuses on describing a desired result, accepting rapid or
broad changes, and evaluating mainly whether the application appears to work.
This project instead defines the contract, delegates a bounded step to the AI,
verifies the result, and preserves recoverable baselines.

There is an informal conversational element in the collaboration, but the
engineering process itself is controlled and agentic.

## Question 2

> If you rated me from 1 to 10, with 10 being the most agentic engineering and
> 1 being vibe coding, what would I score? Use one decimal place and show it on
> a scale ruler.

### Result

**Score: 8.8/10.0 — strongly agentic engineering**

```text
Vibe coding                                      Agentic engineering
1.0                                                     10.0
|----|----|----|----|----|----|----|----|----|
                                       ^
                                      8.8
```

The score is high because the workflow uses plans, scoped steps, version
snapshots, legacy contracts, documentation, static checks, and runtime
validation.

The remaining 1.2 points mainly reflect occasions when runtime validation is
deferred while several sequential implementation steps continue. This is not
necessarily incorrect; it is a practical speed-versus-risk tradeoff.
