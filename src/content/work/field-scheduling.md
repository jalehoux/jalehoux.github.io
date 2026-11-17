---
title: Field scheduling platform
summary: An internal platform for scheduling and routing field staff across facilities, owned end to end from design to production support.
context: Wayfair
role: Sole engineer / owner  # TODO(jacob): confirm
period: 2024 — Present  # TODO(jacob): real dates
stack: [FastAPI, PostgreSQL, Celery, Redis, Google Calendar API, Google Maps API]
metrics:
  - value: "~60"
    label: concurrent users
  - value: "30"
    label: facilities served
confidential: true
order: 2
---

> **TODO(jacob):** Skeleton only. Fill in, then delete these notes. Keep the internal product name out, and check that it's OK to share the user and facility counts.

## The problem

> **TODO(jacob):** How was scheduling done before (spreadsheets, phone calls)? What went wrong: double-booking, wasted drive time, no visibility?

## What I built

A web platform that assigns staff to jobs across facilities, syncs with their calendars, and accounts for drive time between sites.

```
 web app ──▶ FastAPI ──▶ PostgreSQL
                │
                └──▶ Celery workers ◀── Redis
                        ├──▶ Google Calendar (sync)
                        └──▶ Google Maps (drive times)
```

## Key decisions

> **TODO(jacob):** Three or four real decisions with the tradeoffs. Some prompts:

- **Background jobs for anything slow:** calendar sync and distance lookups run in Celery so the UI stays fast. _How did you handle retries and API rate limits?_
- **Conflict handling:** _how do you stop two people from booking the same slot?_ (DB constraints, locking, optimistic updates?)
- **Caching drive times:** _did you cache Maps results to control cost and latency?_
- **Rollout:** _how did you move 30 facilities onto it? Pilot first?_

## Running it in production

> **TODO(jacob):** What broke after launch and how you fixed it. Monitoring, alerts, on-call. This is what separates "built it" from "owned it".

## Results

> **TODO(jacob):** Adoption, time saved, fewer conflicts, anything measurable.
