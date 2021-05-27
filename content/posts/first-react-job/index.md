---
title: "Lessons Learned From My First Web Dev Job"
date: 2021-05-27
description: Things I Learned From My First Web Dev Job
menu:
  sidebar:
    name: Web Dev Learned Lessons
    identifier: First-Web-Dev
    weight: 10
---

Recently I started a web development job as a front-end developer, here are a few things I learned so far.

## 1. Make sure to have the correct working environment

As you might know preparing the development environment is an essential step when you start a new project. In my case the team decided to
use [Nix](https://nixos.org/) for package management. The first problem I faced is that I am using Windows, and in order to be able to
use nix on Windows you have to use [WSL](https://docs.microsoft.com/en-us/windows/wsl/about). You might be wondering why I didn't use WSL2
or why not just use Linux instead of Windows? The answer is I simply did what seemed to be the easiest choice, and that was using WSL.

Unsurprisingly, I regreted doing this when suddenly I couldn't access the nix environment anymore after we had to upgrade the nix version.

I tried to find a solution for this problem (which I shouldn't be waisting my time on) and I basically lost a whole day
without solving it. All of this could be avoided by using Linux instead of Windows, I paid the price of being hasty when chosing the right
working environment.