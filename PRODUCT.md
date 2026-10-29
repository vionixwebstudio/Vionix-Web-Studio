# Product: the studio's own site

**What it is:** the website for the person behind this project's pitch sites, explaining what the work is, how it goes, and how to get in touch. Port 5192, `sites/studio/`.

**Who reads it:** local business owners in Corona, Riverside, Norco and Eastvale (often after seeing their own pitch site), plus anyone the owner shows it to (a business partner, a lawyer).

**Never say**
- The owner's name or age.
- That the sites are made with Claude or any AI tool.
- Business names or screenshots of pitch sites: they stay private until each owner agrees. The work section shows trades and ideas only, drawn as small CSS pictures.
- Prices or fee amounts, guarantees or turnaround times (the user has decided only that updates are included in a monthly maintenance fee, 7 days a week).

**True things it may say** (from how the work is actually done)
- Finds local businesses with great reviews and no website (only a map listing or a social page).
- Builds a full custom site first, from the public listing and real reviews only; nothing invented.
- The owner sees it privately before deciding; nothing goes public until they say yes.
- Every site gets its own idea; hours and an open/closed sign on the front page; one-tap call/text/book; phone-first; smooth motion; sample photos swapped for the owner's before launch; the complete code available on request, organized with a guide (it is offered, never pushed).
- Based in Corona, CA, working across Riverside, Norco and Eastvale.
- Works with businesses that have no storefront (mobile, home-based, service-area); meets owners in person wherever works (user, 2026-10-27).
- Welcomes new businesses and ones with few reviews, and offers to help them grow (user, 2026-10-27). Never promise results or review counts; the climbing count is a labeled illustration.
- Replies within one business day of being contacted, then offers to meet in person to show the demo (user, 2026-10-27).

- Builds for businesses big and small, including redesigns of outdated sites and multi-location businesses (user, 2026-10-28).
- The engineering section shows only numbers measured live on the visitor's device (frame rate, ready time, screen width); never invented stats.

- Available 7 days a week to make any update to a client's website, included in the monthly maintenance fee (user, 2026-10-28). No fee amount is stated.

**Voice:** the studio speaks as "we" (changed from "I" on 2026-10-27 at the user's request). FAQ questions stay in the customer's voice ("Do I get the code?").

**Contact:** `contact` in `src/data.js`. Empty values show "Coming soon" and do nothing; filling in an email or phone turns them into working mailto:, tel: and sms: links.

**Studio name:** "add website" is a working name (the button a listing shows when there's no site). One line in `src/data.js` changes it everywhere.
