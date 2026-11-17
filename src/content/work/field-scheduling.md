---
title: Field scheduling platform
summary: An internal platform that replaced double data entry across two systems with one integrated scheduling flow, from support ticket to booked appointment.
context: Wayfair
role: Tech lead and front-end engineer, team of three
period: 2024 — Present  # TODO(jacob): real start month/year, and is it still running?
stack: [FastAPI, PostgreSQL, Celery, Redis, Google Calendar API, Google Maps API]
metrics:
  - value: "~60"
    label: concurrent users
  - value: "30"
    label: facilities served
  - value: "Hundreds"
    label: of orders taken in
confidential: true
order: 2
---

## The problem

Scheduling an appointment meant working in two separate systems. Customer support agents had to enter the same data into both by hand. That was slow, it was easy for the two systems to drift out of sync, and there was no single place to see what had actually been booked.

## What I built

I led a team of three engineers (back end, mobile, and me on the front end). We built a web platform that takes requests straight from the support ticket intake system, turns them into appointments, syncs them to staff calendars, and accounts for drive time between sites.

```
 support tickets ──▶ FastAPI ──▶ PostgreSQL
                        │
                        └──▶ Celery workers ◀── Redis
                                ├──▶ Google Calendar (sync)
                                ├──▶ Google Maps (drive times)
                                └──▶ Slack (reminders)
```

## Key decisions

- **Integrate with ticket intake instead of adding a third screen.** Requests flow in from the existing support ticket system, so agents enter data once and the double entry is gone.
- **An asynchronous pipeline for creating appointments from templates.** This was the hardest part. Creating new appointments from templates runs as background jobs, not inside the request, with alerting, monitoring and a fallback path when a step fails. The UI stays fast, and a failure gets noticed instead of silently dropping an appointment.
- **Slow and external work happens in background jobs.** Calendar sync and drive-time lookups run in Celery workers backed by Redis, so the app doesn't depend on Google APIs answering in real time.

## Running it in production

There were a few issues after launch. They were minor, and we caught and fixed them quickly. Running it also showed us gaps worth filling. For example, we added a notification system that reminds staff on Slack before an upcoming appointment.

## Results

- **Hundreds of orders** taken in through the new flow
- **Simpler work for support agents:** one entry point instead of keying data into two systems
- **Faster turnaround** on scheduling requests
- **Better analytics,** because every appointment now lives in one system

## What I'd do differently

I'd design the API contract more carefully up front so it covered the UI's use cases. Planning the contract around how the front end actually consumes the data would have saved rework between the back end and the clients.
