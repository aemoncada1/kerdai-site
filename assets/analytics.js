/* Kerdai Business Advisors analytics (Oct 29 2026).
   Paste the IDs below and redeploy. Nothing loads while they are empty, so the site stays tag-free until then.
   ga4:      Google Analytics > Admin > Data streams > Web > Measurement ID, looks like "G-XXXXXXXXXX"
   linkedin: Campaign Manager > Analyze > Insight Tag > Partner ID, a number as a string, e.g. "1234567"
   linkedinConversionId: optional, a LinkedIn conversion rule ID fired on form_submit, e.g. "12345678" */
window.KBA_ANALYTICS = { ga4: "", linkedin: "", linkedinConversionId: "" };
(function (c) {
  function load(src){ var s = document.createElement('script'); s.async = true; s.src = src; document.head.appendChild(s); }
  if (c.ga4) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', c.ga4, { anonymize_ip: true });
    load('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(c.ga4));
  }
  if (c.linkedin) {
    window._linkedin_partner_id = c.linkedin;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(c.linkedin);
    load('https://snap.licdn.com/li.lms-analytics/insight.min.js');
  }
  /* Pages call kbaEvent(name, params): listing_click, bizbuysell_click, form_start, form_submit */
  window.kbaEvent = function (name, params) {
    try { if (c.ga4 && window.gtag) gtag('event', name, params || {}); } catch (e) {}
    try { if (c.linkedin && c.linkedinConversionId && window.lintrk && name === 'form_submit') window.lintrk('track', { conversion_id: c.linkedinConversionId }); } catch (e) {}
  };
})(window.KBA_ANALYTICS);
