# NetAddress Configuration System

## Overview
The NetAddress Configuration System is designed to streamline the process of network planning and IP allocation for organizations with multiple branches and departments. This system provides a comprehensive solution for calculating and assigning IP addresses, subnet masks, and other network configurations, minimizing IP wastage while ensuring efficient and effective network management.

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Key Features](#key-features)
   - [Branch and Department Configuration](#branch-and-department-configuration)
   - [Automatic Network Calculation](#automatic-network-calculation)
   - [Detailed Reporting](#detailed-reporting)
3. [Benefits](#benefits)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Future Enhancements](#future-enhancements)
7. [Team Contributions](#team-contributions)
8. [Developed Report](#developed-report)
9. [Acknowledgments](#acknowledgments)
10. [License](#license)

## Technologies Used
The following technologies were used in the development of the NetAddress Configuration System:

- **TypeScript**
- **CSS**
- **HTML**
- **React**
- **Vite**

## Key Features
- **Branch and Department Configuration:**
  - Input the number of branches.
  - Specify the department count for each branch.
  - Define the number of users in each department.

- **Automatic Network Calculation:**
  - Calculate the related block size per department.
  - Determine the network address, first usable IP, last usable IP, broadcast address, and default gateway for each department.
  - Assign subnet masks with minimal IP wastage for each department.

- **Detailed Reporting:**
  - Generate detailed reports displaying all calculated network parameters.
  - Provide IP configuration codes for each department.
  - Offer configuration scripts for routers and devices to facilitate easy setup.
 
## Benefits

- **Efficiency:** Streamlines the process of IP address allocation and network configuration, saving time and reducing errors.
- **Scalability:** Easily manage network configurations for organizations with multiple branches and departments.
- **Accuracy:** Ensures precise IP address calculations and minimal IP wastage.
- **Usability:** Provides clear, actionable data and visual aids to simplify network setup and management.

## Installation
To install and run the NetAddress Configuration System, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/gayanukabulegoda/NetAddress-Configuration-System.git

2. Navigate to the project directory:
   ```bash
   cd NetAddress-Configuration-System
   
3. Install the required dependencies:
   ```bash
   npm install

4. Start the application:
   ```bash
   npm run dev
    
## Usage
1. Navigate to the home page to input the department name and user count.
2. Review and verify the entered data in the department detail view popup.
3. Generate and view the comprehensive IP table for the entire LAN on the IP table view page.

## Future Enhancements
Future enhancements for the NetAddress Configuration System include:

 - Expanding the system to support WAN (Wide Area Network) calculations and configuration generation.
 - Developing functionality for creating rough network diagrams for WANs to aid in network planning and development.

## Team Contributions
This project is a collaborative effort by the following team members:

- **[Gayanuka](https://github.com/gayanukabulegoda):** Documentation Development / Code Review
- **[Lokitha](https://github.com/jlokitha):** Calculation Implementation
- **[Ashen](https://github.com/amliyanage):** UI Implementation
- **[Yasith](https://github.com/yasith-chathuranga):** Resource Finding and Documentation Support
- **[Aravinda](https://github.com/aravinda-gamage):** UI Design Support and Documentation Support

## Developed Report
For a detailed analysis and insights into the project, refer to our [developed report](https://drive.google.com/file/d/117rcmgSi6xcnvW_kNQofqyep9sQbDRGE/view?usp=sharing).

## Acknowledgments
We would like to thank our instructors and peers for their support and guidance throughout the development of this project. Special thanks to the contributors and the open-source community for their invaluable resources and inspiration.

## License
This project is licensed under the MIT License - see the [MIT License](LICENSE) file for details.

##
<div align="center">
<a href="https://github.com/gayanukabulegoda" target="_blank"><img src = "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://git-scm.com/" target="_blank"><img src = "https://img.shields.io/badge/Git-100000?style=for-the-badge&logo=git&logoColor=white"></a>
<a href="https://html.com/html5/" target="_blank"><img src = "https://img.shields.io/badge/HTML5-100000?style=for-the-badge&logo=HTML5&logoColor=white"></a>
<a href="https://css3.com/" target="_blank"><img src = "https://img.shields.io/badge/CSS3-100000?style=for-the-badge&logo=CSS3&logoColor=white"></a>
<a href="https://www.typescriptlang.org/" target="_blank"><img src = "https://img.shields.io/badge/TypeScript-100000?style=for-the-badge&logo=TypeScript&logoColor=white"></a>
<a href="https://www.javascript.com/" target="_blank"><img src = "https://img.shields.io/badge/JavaScript-100000?style=for-the-badge&logo=JavaScript&logoColor=white"></a>
<a href="https://react.dev/" target="_blank"><img src = "https://img.shields.io/badge/React-100000?style=for-the-badge&logo=react&logoColor=white"></a>
<a href="https://vitejs.dev/guide/" target="_blank"><img src = "https://img.shields.io/badge/Vite-100000?style=for-the-badge&logo=vite&logoColor=white"></a>
</div> <br>
<p align="center">
  &copy; 2024 Gayanuka Bulegoda | Janindu Lokitha | Ashen Madhushanka | Aravinda Gamage | Yasith Chathuranga
</p>
