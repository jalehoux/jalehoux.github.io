---
title: Bird Feeder AI
summary: A Raspberry Pi system that spots birds at my window feeder and identifies the species with a cascade of models, from cheap motion detection up to Claude Vision.
context: Personal project
role: Everything — hardware, models, software
period: "2026"
stack: [Python, OpenCV, YOLOv8, PyTorch, Flask, Socket.IO, Claude API, Raspberry Pi 5]
metrics:
  - value: "33"
    label: species classified
  - value: "~89%"
    label: classifier accuracy
links:
  repo: https://github.com/jalehoux  # TODO(jacob): link the actual repo
order: 3
---

> **TODO(jacob):** Add a short demo clip or a few sample detections (a GIF in `public/` works), link the real repo, and check the numbers.

## The problem

I wanted to know who visits my window feeder without watching it all day. Running a big vision model on every camera frame would be slow and expensive, so the challenge was getting good accuracy on a Raspberry Pi.

## Architecture: a model cascade

Each stage is cheaper than the next and filters out frames before the expensive ones run.

```
 Camera Module 3 NoIR
        │
        ▼
 1. Motion detection (OpenCV)    cheap, runs on every frame
        │ motion
        ▼
 2. Bird detection (YOLOv8)      is there actually a bird?
        │ bird crop
        ▼
 3. Species classifier            custom model, 33 local species
        │ low confidence
        ▼
 4. Claude Vision fallback        only for the hard cases
        │
        ▼
 Flask + Socket.IO live dashboard
```

## Key decisions

- **Cascade instead of one big model:** most frames have no bird, so cheap stages filter them out and the expensive ones only run when they're needed.
- **Custom classifier trained on iNaturalist photos:** limited to the 33 species that actually show up in my area, which beats a general-purpose model on accuracy and speed.
- **LLM as a fallback, not the default:** Claude Vision handles low-confidence cases, which keeps API costs near zero and still catches the hard ones.
- **NoIR camera:** _TODO(jacob): why NoIR? Low light / early morning?_

## Results

> **TODO(jacob):** Detections per day, false-positive rate, how often the fallback fires, favorite sighting.

## What's next

> **TODO(jacob):** e.g. a public "recent sightings" page, or retraining on your own labeled captures.
