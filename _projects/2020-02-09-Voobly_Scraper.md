---
layout: default
title: Voobly Scraper
categories: project
description: Web Scraper with Nightmare JS Framework and more. Personal project.
---

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

<div class="project">
   <center>
      <h1 style="color:blue;">Voobly Scraper</h1>
      <img src="/assets/img/projects/voobly-scraper/project_voobly_card.png" />
      <p>
         <a href="https://github.com/islamz1214/voobly-scraper">Repo - https://github.com/islamz1214/voobly-scraper</a>
      </p>
      <p>
         I love the game called "Age of Mythology". I want to improve my gameplay but current websites don't have the latest aom replay files. So this project idea came to mind. The voobly site keeps the files temporarily so instead of manually downloading the replays I decided to automate this process and share the files in a server to the aom community. I used Nightmare JS to navigate to the site and download the files. Cent OS linode box to store the files.
         Express JS to get the filenames from server and provide a GET api to retrieve the list. Finally, Vue JS to display the links by latest date for end users to download with multi-search filter.
      </p>
      <table>
         <tr>
            <th>Repo</th>
            <th>Description</th>
         </tr>
         <tr>
            <td> <a href="https://github.com/islamz1214/voobly-rec-scraper ">voobly-rec-scraper </a></td>
            <td> Scrape and download .rcx files from voobly site.</td>
         </tr>
         <tr>
            <td><a href="https://github.com/islamz1214/voobly-rec-server ">voobly-rec-server </a></td>
            <td> Provide API to get filename.</td>
         </tr>
         <tr>
            <td><a href="https://github.com/islamz1214/voobly-rec-vue">voobly-rec-vue </a></td>
            <td> List filename links for download.</td>
         </tr>
      </table>
      <br>
      <p>
         Overall, I learned alot more about javascript (Node/Express/Nightmare JS), promises, web selectors, and server configs.
         I currently have this running live on my website; via subdomain. I'm proud of my work :)
      </p>
      <a href="http://aomrecs.zahid.io">aomrecs.zahid.io</a>
      <hr>
      <img class="img-responsive" src="/assets/img/projects/voobly-scraper/main_site.png" />
   </center>
</div>