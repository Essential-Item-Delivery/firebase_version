<h1>SHOPPERLY : Essential Item Delivery </h1>
<img src="https://img.shields.io/badge/Made%20with-JavaScript-orange?style=for-the-badge&logo=appveyor"> <img src="https://img.shields.io/badge/Made%20with-Bootstrap%20HTML-blueviolet?style=for-the-badge&logo=appveyor"> <img src="https://img.shields.io/badge/Made%20with-Firebase-red?style=for-the-badge&logo=appveyor">
---------------------
CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Firebase
 * Configuration


<br>

INTRODUCTION
------------
Shopperly is an online shopping platform that offers essential item deliveries. This application is currently deployed at the
URL listed. This document explains what will be required to review, manage and modify back-end functionality via Firebase. This
document provides definitions for important commands with Firebase as well as maintainer contact details for any issues.

<b>deployment URL:</b> https://shopperly.web.app/

<br>
<br>

REQUIREMENTS
------------

This web application requires the following modules for both re-deployment 
and firebase management.

 <b>* Node.js (https://nodejs.org/en/download/)</b><br>
    Select your installer based on your OS
    <br>
    <br>
    Terminal/Command Line Option:<br>
    [sudo] npm install npm -g via terminal
    <br>
    Please note if you have do not have npm installed please do so before
    installing node.
    <br>

 <b>* Firebase CLI (installation options below):</b>
    <br>
    Windows: 
    https://firebase.google.com/docs/cli#install-cli-windows
    <br>
    Mac or Linux:
    https://firebase.google.com/docs/cli#install-cli-mac-linux

<br>
<br>

FIREBASE
-------------
For managing and editing database and firebase functions you will need to
register a new account with Firebase. Once created, send an email to any
one of the maintainers listed and they will add your account to the project.
Firebase has yet to offer a more robust solution for handing over apps so this
is the only option available currently. Once a maintainer receives your account
with "email ID" we will handover application to designated account.

Once Firebase is linked you should be able to use the following commands below
from the firebase-tools CLI for your purposes:

<h3>PREPARING FIREBASE</h3>

<b>npm install --save firebase</b><br>
<i>Installing firebase.</i>

<b>firebase login</b><br>
<i>Log in to your firebase account using this command from prompt.</i>

<b>firebase projects:list</b><br>
<i>This command lists all projects related to your account</i>

<b>firebase use  Shopperly Application</b><br>
<i>Specify project to be used</i>

<h3>DEPLOYING WITH FIREBASE</h3>

<b>firebase serve</b><br>
<i>Deploy the application (usually localhost:5000)</i>

<b>firebase deploy</b><br>
<i>Deploys on main server (will provide URL in prompt)</i>

For more information on using the firebase CLI:<br>
(https://firebase.google.com/docs/cli)</i>
<br>
<br>
<br>

CONFIGURATION
-------------
The application has no menu or modifiable settings. There is no configuration.
As the web application is already deployed there is no need for installation
or configuration. <br>This web application consists of HTML, Javascript and uses
Firebase for back-end functionality. 

<br>
<br>

MAINTAINERS
-----------
Current maintainers:
 * Doris - zhado856@student.otago.ac.nz
 * Vincent -toapa262@student.otago.ac.nz
 * Uzzie - shaus019@student.otago.ac.nz
 * Derek - zoude603@student.otago.ac.nz
 * Dominic - findo360@student.otago.ac.nz

This project has been made in conjunction with:
 * University of Otago : Information Science Department



-------------------------------------------------------