/*
locale value is undefined not provided
*/
var [lang, locale] = (((navigator.userLanguage || navigator.language).replace('-', '_')).toLowerCase()).split('_');
console.log('Lang and locale: ', [lang, locale]);

function getBestSuitableSupportedLang(lang, locale, supported) {
  // Exclude first element, default language
  var supported_lang = supported.slice(0,1);
  supported = supported.map(lang => {
    return lang.toLowerCase();
  })

  if (supported.includes(lang + "-" + locale)) {
    supported_lang = lang + "-" + locale;
  } else if (supported.includes(lang)) {
    supported_lang = lang;
  }

  return supported_lang;
}

console.log('Supported langs: ', supported_languages);

var suitable_lang = getBestSuitableSupportedLang(lang, locale, supported_languages)
console.log('Suitable lang: ', suitable_lang);
console.log('Supported langs: ', supported_languages);
const current_lang = "{{site.lang}}"
console.log("Current lang: ", current_lang);

var hostname = window.location.hostname;
var referrer = document.referrer;

var landingPage = !referrer || referrer.indexOf(hostname) == -1;

if (landingPage && (current_lang !== suitable_lang)) {
  
  var default_lang = supported_languages[0];
  var target_lang = (suitable_lang == default_lang) ? null : suitable_lang;
  console.log(`Are suitable_lang ${suitable_lang} equals to ${default_lang}? ${suitable_lang == default_lang}`);

  // window.alert(`Current lang ${current_lang} is not best suitable (${suitable_lang})`);
  window.location = target_lang ? '/' + target_lang + '/' : '/';
}
