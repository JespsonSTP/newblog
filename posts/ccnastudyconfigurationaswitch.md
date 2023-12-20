---
title: "CCNA Study: Initial Configuration of a switch and overview of MAC Table"
subtitle: "Layer 2 Configuration a switch"
date: "2020-12-27"
---

layer 2 is the data link layer. in this layer, data is called a frame/ethernet frame, and the addressing that identifies devices such as your computer is called the MAC address. MAC address is 48 bits, with 2 parts, one part that represents the company that made the device and the other unique to your specific device.


Typically due to encapsulation when the data gets to layer 2, it has the header of the layers of the TCP/IP model. So it would have layer 5, layer 4, layer 3, and layer 2 headers and decapsulation happens as the data travels up the networking stack, but I am focusing on layer 2 aka the data link layer.


Anatomy of a frame


layer 2 header(22 byte)

preamble - 7 bytes - allows the receiving device to sync its receive clock

start frame delimiter(sfd) - 1 byte - signifies the end of preamble

destination mac - 6 byte - 

source mac - 6 byte - 

type - 2 byte - indicates the type of packet encapsulated in the frame


layer 2 trailer(4 byte)

frame check sequence (fcs) - 4 byte

Used to detect corrupted data by running the crc(cyclic redundancy check) algorithm on the received data

frames that do not pass the error detection logic aka Cyclic redundancy check (CRC) as implemented in the FCS. The receiving device discards the frame and counts it as some kind of input error.

This layer is where the physical layer connects to the network for example your computer connects to the network via an unshielded twisted pair (UTP) cable (RJ45) that plugs directly into the network interface card(NIC) and plugged into a port on a switch. The main device of this layer is called a switch but there are other devices.



switches work on layer 2 and use MAC address to send traffic. Its main function is to allow an internal network to expand as well as create segments of smaller networks in the internal network. These features allow for improved bandwidth on a network as well as connecting different workgroups. Typical ports on a switch are ethernet ports which allow devices to connect to switches, allow switches to connect to other switches, as well as connect switches to routers. There are GigabitEthernet ports which are similar to ethernet ports but allow for more advanced services such as OSPF and BGP, there are small form-factor ports(SFP) which are used to provide fiber-based connectivity, and management ports which are used for management purposes.



Although mainly being layer 2 devices, switches can have layer 3 functionality which allows us to give it an IP address and get into it using SSH in order to properly manage it. There are also multi-layer switches which as the name state are switches that work on both layer 2 and layer 3.



Initial configuration of a switch 

Before doing any configurations on a switch or router we need to learn about the different modes of our device.


Command line modes: 
User Exec Mode - signified by the >, typically here e start our from.

Privileged Executive Mode - signified by the # symbol at the end of the device name.

Global Configuration Mode - signified by the (config)# at the end of the device name.

Once you get to global configuration we can branch out from there to other more specific configuration modes based on our needs.



SWITCHING

LAN, BROADCAST DOMAIN, AND COLLISION DOMAIN

A LAN (local area network) is a single location like your home or office, in technical terms it is a broadcast domain. A broadcast domain is when a group of devices will receive a broadcast frame. I understand this but the wording is not making sense but you can think of it like a group of person in a room and if a person yell then everyone in that room will receive it, Think of that group of person as a broadcast domain. so essentially a group of devices connected with each other. A broadcast frame destination mac has all FFFF.FFFF.FFFF and devices on that broadcast will get that frame. So a device/computer sends a broadcast frame and the switch distributes it to everyone in that network and stops at the router so it doesn't go beyond that network. Therefore a a switch is a broadcast domain.

As we know a switch is a broadcast domain but each interface in a switch is a collision domain. A collision happens when a device sends data just as it is receiving data and these two meet hence collision. CSMA/CD is the technology used to handle collisions, it does that by listening on the wire(layer 1 physical- UTP) to check if there was any collision when devices are sending messages to one another, and if a collision occurs then a jamming signal would be sent stopping all devices connected from sending any more msgs for a specific amount of time. the devices get different wait times before sending data again. Late collisions are a thing and it means a collision that is caught late. This is not something that happens often but it may signal that the ethernet network is not properly designed because of too many repeater or cables being too long. CSMA/CD is not as prevalent as it was in the past since switches are running duplex ethernet meaning devices can send and receive data at the same.


