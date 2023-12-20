---
title: "CCNA Study: The Basic of routers and Setting up a static route"
subtitle: "the basic of routers and setting up a static route"
date: "2023-12-27"
---

## The role of switches and routers
Every computer network has at least one switch where we connect end devices (computers, printers, IP phones, and other devices) and at least one router that represents the main device in a network and connects us to the outside world.

Routers operate at layer 3 of the TCP/IP and OSI Reference model and have the capability to forward packets from source to destination. Packets travel from the source device over the switch to the router’s LAN interface. The router then forwards the packet to the outside interface based on the destination IP address of the packet.

 The most common modes are as follows:

    - User Exec Mode - default mode when you first connect to router and end with  >, ex: NYEDGE1>
    - Privileged Executive Mode -  first level to start making configuration usually show commands tbh and end with  #, ex: NYEDGE1#
    - Global Configuration Mode - signified by the (config)# at the end of the device name, for example, NYEDGE1 (config)#


## Initial set up of router

In the spirit of labing everyday, I am documenting my labs in cybrary. This is mainly for me but I hope it helped if it was needed.



## Set up Static route
