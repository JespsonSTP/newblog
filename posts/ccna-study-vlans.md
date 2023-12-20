---
title: "CCNA Study: Creating VLANs and Configurating DTP, VTP, and STP"
subtitle: "Layer 2 Configuration and protocols"
date: "2020-12-27"
---

# What is a  VLAN

VLANs are used to create smaller networks within a network/LAN to segment it and this improves performance and security. This is probably not needed for your home network but in offices, this is needed to provide each department with their own network kind of like HR get a network, Administrators get a network everyone gets a network --insert Oprah meme here lol

The switch will consider each VLAN as a separate LAN and will not forward traffic from one VLAN to another VLAN. VLANs are logically separated and each VLAN is a broadcast domain. All devices in a VLAN communicate as if they were on the same wire and are on the same broadcast domain and on the same subnet. most switches come with pre-configured VLANs such as VLAN 1, 1002,1003,1004, and 1005. VLAN 1 is the native VLAN which by default all ports belong to it and the other VLANs are for backward compatibility, it is recommended to have a maximum of 500 devices per VLAN. It is possible to use one VLAN per interface but it is not as efficient as multiple VLANs per interface, to configure this we need to use trunk links/ports.



## Access Port and Trunk Ports

Links or ports are the same thing basically the connection between switches and switches or switches to router. Access ports allow to use of one VLAN  per interface but trunk ports allow to use of multiple VLANs per interface, this is possible by tagging the frame with the VLAN it belongs to, essentially the frame travels with its VLAN ID. frames sent on an access port are not tagged. IEEE 802.1Q aka dot1q is the protocol used to tag the frames with the VLAN they belong to.



## DTP, VTP, STP and RSTP

