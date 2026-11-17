---
title: Event-driven order pipelines
summary: Replacing batch order processing with asynchronous Kafka pipelines that stream order data into GCP.
context: Wayfair
role: Lead engineer — design, build, rollout  # TODO(jacob): your actual role on this
period: 2023 — 2024  # TODO(jacob): real dates
stack: [Kafka, Python, GCP, BigQuery, Docker]  # TODO(jacob): correct the stack
metrics:
  - value: "Millions"  # TODO(jacob): rounded volume, e.g. "Millions of events / day"
    label: of order events per day
  - value: "Hours → minutes"  # TODO(jacob): the real before/after
    label: order data freshness
confidential: true
order: 1
---

> **TODO(jacob):** Everything below is a skeleton. Replace each section with your own details, then delete these notes. Rules: no internal service or team names, round every number, describe patterns rather than proprietary code.

## The problem

> **TODO(jacob):** What was broken or slow before? Who felt it (warehouse ops, finance, customers)? Why did it matter to the business? Two or three sentences.

Order data reached downstream systems through scheduled batch jobs. That meant stale data, painful backfills when a job failed, and tight coupling between the teams that produced orders and the teams that consumed them.

## What I built

A set of greenfield, asynchronous pipelines: services publish order events to Kafka, and Python consumers validate, enrich and land them in GCP for downstream teams.

```
 order services ──▶ Kafka topics ──▶ Python consumers ──▶ GCP storage / warehouse
                         │                 │
                         └──▶ DLQ ◀────────┘   (poison messages, replay)
```

> **TODO(jacob):** Swap this sketch for a real (generic) diagram. Excalidraw exports to SVG, and you can drop it in `public/diagrams/` and reference it here.

## Key decisions

> **TODO(jacob):** This is the most important section for a senior interview. Pick three or four real decisions, and for each one say what you chose, what you rejected, and why.

- **Async over synchronous APIs:** decoupled producers from consumers so either side could deploy, fail or scale on its own.
- **Idempotent consumers:** every write is keyed so redelivered or replayed events can't double-count.
- **Dead-letter queue and replay:** bad messages are parked instead of blocking the partition, and can be replayed after a fix.
- **Schema evolution:** _how did you handle changing event shapes without breaking consumers?_

## Results

> **TODO(jacob):** Concrete outcomes, rounded. Throughput, latency or freshness, incidents avoided, teams onboarded, cost. Use before/after where you can.

## What I'd do differently

> **TODO(jacob):** One honest paragraph. Interviewers love this, because it shows judgment.
