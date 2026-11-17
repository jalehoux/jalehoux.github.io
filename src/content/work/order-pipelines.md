---
title: Event-driven order creation pipeline
summary: Replacing a once-a-day Excel import with a Kafka pipeline that creates orders in real time from supplier events.
context: Wayfair
role: Owner. Requirements, end-to-end design, build, testing and production monitoring
period: 2020 — 2021  # TODO(jacob): real years
stack: [Kafka, Event-driven architecture]  # TODO(jacob): add the language / services you used (e.g. Python, PHP, MySQL)
metrics:
  - value: "Daily → real time"
    label: order creation
  - value: "Hundreds"
    label: of orders per day, no manual import
confidential: true
order: 1
---

## The problem

Operations created these orders from Excel sheets, imported once a day. That meant orders were never real time, the process was hard to audit, and any bad data had to be found and fixed by hand inside a spreadsheet before it could go anywhere.

## What I built

I gathered the requirements from operations, designed the whole flow end to end, then built, tested and monitored it in production.

The pipeline listens to an upstream Kafka topic of supplier-side events. For each event it:

1. **Filters**: checks that it's an event we actually care about.
2. **Deduplicates**: checks whether we've already created this order, so a redelivered or repeated event never creates a duplicate.
3. **Hydrates**: enriches the event with the domain-specific details the order needs.
4. **Creates the order**: or, if required data is missing, creates it in a *pending* state for operations to review.

```
 supplier events ──▶ Kafka topic ──▶ order consumer
                                        │
                     1. relevant? ──no──▶ skip
                     2. already have it? ──yes──▶ skip
                     3. hydrate with domain details
                        │
               complete? ├── yes ──▶ order created
                         └── no  ──▶ order created as PENDING ──▶ ops review
```

## Key decisions

- **Event-driven instead of a better import.** Fixing the spreadsheet would still have left a daily batch. Consuming the supplier events directly made orders real time and removed the manual step entirely.
- **Idempotency check before every write.** Kafka can deliver an event more than once, so the pipeline checks for an existing order first. Retries and replays are safe, and duplicates can't happen.
- **Fail into "pending", not into the void.** An order missing data is still created, but parked as pending for a human. Nothing gets silently dropped, the consumer never blocks on one bad event, and operations sees exactly which orders need attention. In practice this was rare.
- **Hydrate at creation time.** Adding the domain details once, when the order is created, means downstream systems get a complete order and don't each have to look the same things up.

## Results

- **Removed the manual daily import** for operations completely.
- **Real-time orders** instead of once a day.
- **Fewer errors**, because data is validated at the source instead of corrected in a spreadsheet.
- **Auditability and analytics:** every order now traces back to the event that created it, which gave the business a much clearer view of order flow.

## What I'd do differently

The core design held up, and I'd keep most of it. I'd invest earlier in **alerting and error detail**: alerts when pending orders spike, and a structured reason on every pending order so operations knows exactly what's missing without digging.
