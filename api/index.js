module.exports = async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="ro">
    <head>
      <meta charset="UTF-8">
      <title>VidSrc-Embeds-NoAds by ScriptSRC</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          background-color: #f6f8fa;
          color: #171c24;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .content-wrapper {
          background: #fff;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          max-width: 600px;
          width: 100%;
          box-sizing: border-box;
          text-align: center;
          margin: 20px;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #0366d6;
        }

        .script-info p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .script-info code {
          background-color: #eaeef2;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-family: monospace;
        }

        .script-info a {
          color: #0366d6;
          text-decoration: none;
        }

        .script-info a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="content-wrapper">
        <h1 class="section-title">VidSrc-Embeds-NoAds</h1>
        <div class="script-info">
          <p>This proxy was proudly created by <strong><a href="https://scriptsrc.com" target="_blank">ScriptSRC.com</a></strong> to remove advertisements from VidSrc embed players.</p
          <p>To use it, simply append the target embed URL to the <strong>/embed?url=</strong> endpoint. For example: <strong><a href="https://vid-src-embeds-no-ads-demo.vercel.app/embed?url=https://vidsrc.in/embed/tt0944947/2-3/" target="_blank">/embed?url=https://vidsrc.in/embed/tt0944947/2-3/</a></strong> will return a clean, ad-free video player.</p>
        </div>
      </div>
    </body>
    </html>
  `);
};
