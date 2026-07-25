# AI Workflow Assessment — iotrack.live

Date: 22 July 2026
Assessed by: Claude (Fable 5), from direct observation of one working
session on the Activity Report feature (`computation.server.go` +
`web.frontend.vue`), Phase 5 close-out.

---

## Question 1

> Is the way I am working with AI more like vibe coding or agentic
> engineering?

### Verdict

**Agentic engineering.** The distinction is not who types the code — it
is who makes the decisions and who checks the work, and in this project
both stay firmly with the human.

What was actually observed, not inferred:

- **Spec before code, every phase.** No implementation starts until a
  Step 0 docs-only change lands in `SPEC.md`/`ROADMAP.md`. The roadmap
  is a numbered, checkboxed contract, and it is kept current in the
  same change as the code it describes.
- **The human is the acceptance gate.** Phase 5 closed only on an
  explicit live confirmation against real drive days — never on the
  AI's claim that something worked. "Verified" from the AI is treated
  as a claim to spot-check, and rightly so: three real UI bugs (a
  self-closing dropdown, a clipped panel, an unscrollable list) were
  caught by the human testing the live app after the AI had called the
  work verified.
- **Root causes over patches.** When the report endpoint wrongly denied
  access to child-org assets, the accepted fix was not a workaround but
  a faithful port of the authoritative org-scope algorithm into the Go
  service — a choice the human made deliberately when offered a
  cheaper alternative.
- **Process supervision is real.** When the AI went silent chasing a
  test-harness rabbit hole for twenty minutes, the human interrupted,
  demanded an account of what was happening, and reset expectations
  ("if something like this happens, just tell me"). That is
  supervision, not prompting-and-hoping.
- **Hard control points.** The AI never commits or pushes; git history
  is authored exclusively by the human, with commit messages reviewed
  before use. Production database access is read-only by standing
  rule. Scope is bounded per service by checked-in instructions
  (`AGENTS.md`).

Vibe coding describes an outcome and accepts what comes back if it
appears to work. This project defines contracts, delegates bounded
steps, verifies against reality, and records the result in docs. The
conversational tone is informal; the engineering process is not.

---

## Question 2

> Rate the workflow from 1 to 10 — 1 being vibe coding, 10 being
> agentic engineering — one decimal place, on a ruler.

### Score: 8.6 / 10.0

```text
Vibe coding                                      Agentic engineering
1.0                                                             10.0
|----|----|----|----|----|----|----|----|----|
                                        ^
                                       8.6
```

Derived from a weighted rubric rather than gut feel:

| Dimension                      | Weight | Score | Basis                                                        |
|--------------------------------|-------:|------:|--------------------------------------------------------------|
| Planning before code           |    20% |   9.5 | Step-0 docs first, every phase; plan mode used and approved   |
| Verification of AI output      |    25% |   9.0 | Live-tested every fix; caught 3 bugs the AI's checks missed   |
| Decision ownership             |    20% |   9.5 | Architecture calls, sign-offs, and git all held by the human  |
| Process supervision            |    15% |   8.5 | Rabbit hole interrupted — but after 20 min, and as a one-off  |
| Requirements stated up front   |    10% |   6.0 | Scroll, spacing, search each arrived as a post-"done" round   |
| Comprehension of owned code    |    10% |   5.5 | The Go service is accepted but not yet readable by its owner  |

Weighted total: **8.6**.

### Where the missing 1.4 lives

The top four dimensions are near ceiling; the score is pulled down
almost entirely by two specific, fixable habits:

1. **Comprehension debt (largest).** The owner holds a Go service he
   did not write and cannot yet read, and on a personal project he is
   the *entire* review layer — there is no colleague or CI safety net
   behind him. The process is engineered; full ownership of the
   artifact is not yet. A guided walkthrough of the service
   (handler → service → repository → engine) is already planned and
   directly repays this.
2. **Acceptance criteria arriving iteratively.** The asset picker took
   three post-completion rounds (must scroll, more bottom space, add
   search) that a single up-front sentence — "must handle 6+ orgs,
   scroll, and be searchable" — would have collapsed into one.

Close those two and this workflow sits at 9.3+. The way of working is
not the gap; the two habits are.

### A note on independence

A parallel assessment by a different AI on a different project scored a
similar workflow 8.8, citing a different weakness (deferred runtime
validation). This assessment was written after seeing that one, so the
number here carries an unavoidable anchoring risk — but the verdict,
the evidence, and the identified gaps are drawn solely from this
session, and the two assessments dock points for different reasons,
which is consistent with two genuinely different projects rather than
one echoing the other.
