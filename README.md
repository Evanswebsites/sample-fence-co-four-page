# Small-business website template

Four pages (Home, Services, Reviews, Contact), one stylesheet, and a tiny script. There is nothing to
install and nothing to build. The sample content is a made-up fence company, "Sample Fence Co."
As shipped, the whole site is about 40 KB, loads nothing from other websites, and has no tracking.

| File | What it is |
|---|---|
| `index.html`, `services.html`, `reviews.html`, `contact.html` | The four pages. Plain HTML you can edit in any text editor. |
| `styles.css` | All colors, fonts, and spacing. Color sets are listed at the bottom. |
| `site.js` | Keeps the footer year current and shows the demo form message. Safe to leave alone. |
| `images/pickets.svg` | The wooden picket strip along the top of each page. |
| `images/favicon.svg` | The small icon in the browser tab. |

## 1. See it

Unzip the folder and double-click `index.html`. It opens in your browser, and the pages link to each other.

## 2. Make it a real business's site

### Swap in the real details

Open the folder in an editor (VS Code is free) and use Find and Replace across all files
(VS Code: Ctrl+Shift+H). Replace these exactly as written:

| Find | Replace with |
|---|---|
| `Sample Fence Co.` | The business name |
| `(714) 555-0123` | The phone number as people read it |
| `+17145550123` | The same number with no spaces or dashes: a plus sign, a 1, then ten digits |
| `hello@example.com` | The business email |
| `1234 Sample Road` | The street address |
| `Anytown` | The city |
| `90000` | The ZIP code |

If the business is not in California, also change `CA` in the footer, on `contact.html`, and in the
`addressRegion` line of the code block in the `<head>` of `index.html`.

Then edit these by hand:

- **Hours:** the table in `contact.html`, and `openingHours` in that same code block in `index.html`.
- **Words:** rewrite the headlines and sentences for the business. The page layout suits most local
  trades, but the wording is written for fences.
- **Services:** the short list is in `index.html` and the long list is in `services.html`. Each service
  is one `<li>` block. Copy a block to add one, delete a block to remove one, and keep the two pages in step.

### Take out the demo labels

Everything that marks this as a demo is next to a comment that says `DEMO ONLY`. On a real client's site, delete:

- In every page: the line `<meta name="robots" content="noindex">` (it asks Google not to list the page),
  the dark banner at the top, and the sentence "This is a sample site for a made-up business." in the footer.
- In `reviews.html`: the grey notice and the four placeholder quotes (see Reviews below).

Then search all files (VS Code: Ctrl+Shift+F) for `DEMO ONLY`, `Placeholder`, `Sample`, `555`,
`example.com`, and `noindex`. Anything left should be something you meant to keep. The search for
`Placeholder` will also find the placeholder quotes and the map box (both covered below), plus harmless
matches: the hint text in the form's Details box and a few style names in `styles.css`.

### Reviews

Use real reviews only, word for word, and only with the customer's permission. Never write or
"improve" a review for someone. In each quote, replace the placeholder text, replace
`Customer name, town` with the person's first name and town, delete the
`<span class="tag">Placeholder</span>`, and change `<figure class="quote is-placeholder">` to
`<figure class="quote">` so the text turns dark. The home page has one more placeholder quote.

For the "Read our reviews on Google" button: open the business on Google Maps, click Share, copy the
link, and paste it over `https://www.google.com/maps` in `reviews.html`. If the business has no Google
reviews yet, delete the button.

### Contact form

The form in `contact.html` does not send anything yet; it only shows a demo message. To receive real
requests you need a form service. Formspree is one with a free plan (check its current limits):

1. Make an account at formspree.io, create a form, and enter the business's email address. It gives you
   a form address that looks like `https://formspree.io/f/abcdwxyz`.
2. In `contact.html`, find the line that begins `<form class="form" action="#"` and replace that whole
   line with `<form class="form" action="https://formspree.io/f/abcdwxyz" method="post">`, using your own
   form address. Removing `data-demo-form` turns off the demo message.
3. Put the site online, send a test request yourself, and confirm it arrives. The first request usually
   asks the owner to confirm their email address.

Requests pass through the form service on their way to the owner's inbox, so say so if the owner asks.
The hidden `_gotcha` field in the form is a spam trap that Formspree looks for. Leave it in.

### Map

On a computer, open the business on Google Maps, click Share, choose Embed a map, and click Copy HTML.
In what you copied, find `src="..."` and copy only the address between the quotes. In `contact.html`,
replace the grey `<div class="map">...</div>` line with:

```html
<iframe class="map-embed" title="Map showing the shop" loading="lazy" src="PASTE-THE-ADDRESS-HERE"></iframe>
```

If there is no shop to show (a mobile business, for example), delete the "Where we work" section.

### Photos

The template ships without photos so it fits any trade. Real photos of the owner's own work make a big
difference. Put them in the `images` folder, keep each under about 300 KB (resize to 1600 pixels wide
or less), and add a section like this to `index.html`, just above the tan "Need a fence or a repair?" band:

```html
<section class="section">
  <div class="wrap">
    <h2>Recent work</h2>
    <div class="gallery">
      <img src="images/job-1.jpg" alt="New cedar fence along a back yard" width="1200" height="900" loading="lazy">
      <img src="images/job-2.jpg" alt="Describe what the photo shows" width="1200" height="900" loading="lazy">
      <img src="images/job-3.jpg" alt="Describe what the photo shows" width="1200" height="900" loading="lazy">
    </div>
  </div>
</section>
```

Set `width` and `height` to the photo's real pixel size. Write alt text that says what the photo shows.
Use only photos the owner took or gave you permission to use, never photos from other websites.

### Colors, fonts, and the picket strip

- **Colors:** the five brand lines at the top of `styles.css`. Four ready-made sets are listed at the
  bottom of the file.
- **Fonts:** headings use a condensed font that is already installed on the visitor's device (for example
  Bahnschrift on Windows and Avenir Next Condensed on Apple devices), so nothing is downloaded and the page
  stays fast. On a device without one, headings fall back to the plain system font and the site still looks right.
- **Picket strip:** it is fence-specific. The bottom of `styles.css` explains how to switch it off.

## 3. Put it online for free

GitHub Pages is free and works well for small sites. On a free account the repository has to be Public.

1. Go to github.com and sign up. Pick a plain, professional username, because it appears in the web address.
2. Click the + at the top right, then New repository. Name it (for the demo, `sample-fence-co`), choose
   Public, and click Create repository.
3. On the new repository's page, click "uploading an existing file". Open the unzipped folder, select
   everything inside it (the four pages, `styles.css`, `site.js`, and the `images` folder), and drag it onto
   the page. Drag the contents, not the zip file and not the outer folder. (`README.md` can stay out.)
   When the upload finishes, click Commit changes.
4. Click Settings, then Pages in the left menu. Under Build and deployment, set Source to "Deploy from a
   branch", set the branch to `main` and the folder to `/ (root)`, and click Save.
5. Wait a minute or two and refresh. The Pages screen shows the live address, which looks like
   `https://USERNAME.github.io/sample-fence-co/`. Open it on your computer and on your phone, and click every link.

To change something later, open the file in the repository, click the pencil icon, edit it, and click
Commit changes. The site updates within a couple of minutes. Use one repository per business.

Menu names change now and then. If one is missing, search for "GitHub Pages publishing source".
Cloudflare Pages and Netlify can also host a folder like this for free (check their current limits).

A client who wants their own address (like `smithfence.com`) buys a domain name, usually about $10 to $15
a year, and points it at the site. GitHub's "custom domain" help page walks through it.

## 4. Before it goes live

- Every detail is true: phone, address, hours, service area. Do not add claims the owner has not confirmed,
  such as "licensed and insured", "family owned", "same-day service", years in business, or awards.
- **Contractors in California:** licensed contractors must show their license number in all advertising,
  and the state counts website content as advertising
  ([CSLB advertising rules](https://www2.cslb.ca.gov/Newsletter/2019-Spring/3-Advertising-Rules.asp)).
  If the business does contractor work (fences, plumbing, electrical, painting, and similar), ask for the
  license number and add a line such as `<p>License #000000</p>` to the footer's Contact column. If they
  have no license, do not publish "licensed" claims, and ask them to check which rules apply to them.
  This is general information, not legal advice.
- Reviews are real and posted with permission.
- The demo labels are gone (use the search words listed above).
- The contact form works: send a test and confirm it arrives.
- Tap the phone number on an actual phone.
- Run the live address through pagespeed.web.dev. This template should score well; photos you add are the
  usual reason scores drop, so resize them first.
- The owner has seen the finished site and said yes before it goes live under their name.
