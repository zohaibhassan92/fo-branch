FLAME ON - PCA END COUNT WEBSITE
================================
Folder mein files:
  index.html        -> website (isko double-click kar ke kholein)
  config.js         -> yahan email script ka URL paste hota hai
  email-script.gs   -> Google Apps Script ka code (email bhejne ke liye)
  lib/              -> PDF banane ki files (internet ke baghair bhi chalti hain)

EMAIL SET-UP (sirf ek baar):
1. script.google.com kholein -> New project.
2. Purana code mita kar email-script.gs ka poora code paste karein -> Save.
3. Deploy -> New deployment -> Web app.
     Execute as: Me
     Who has access: Anyone
   Deploy karein, Allow dabayein (permission de dein).
4. Jo Web App URL mile, usay config.js mein ENDPOINT ke quotes ke andar paste karein. Save.
5. index.html kholein, test submit karein. Email aani chahiye:
   Subject: PCA End Count - <Branch> - <Date>   (CSV + PDF attached)

NOTES:
- Submit par CSV + PDF device mein download hoti hain, aur email zaroor jati hai
  (email ke liye internet chahiye).
- Branches badalni hon to index.html mein BRANCHES wali line edit karein.
- GitHub Pages par lagana ho to poora folder upload karein (sirf index.html nahi).
