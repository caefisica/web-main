/*
import docsearch from '@docsearch/js';

var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

docsearch({
  container: '#docsearch',
  appId: 'JE37E4YOU3',
  indexName: 'netlify_abc167f5-8dee-48db-a7da-3c97c18849be_master_all',
  apiKey: '0b06babcb9d1b0aaadaa9e9af5be7bfe',
  debug: false,
});
*/

var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

algoliasearchNetlify({
  appId: 'JE37E4YOU3',
  apiKey: '0b06babcb9d1b0aaadaa9e9af5be7bfe',
  siteId: 'abc167f5-8dee-48db-a7da-3c97c18849be',
  branch: 'master',
  selector: '#docsearch',
});

var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@2.0.3";
  
!function(e,a,t,n,s,i,c){e.AlgoliaAnalyticsObject=s,e[s]=e[s]||function(){
(e[s].queue=e[s].queue||[]).push(arguments)},i=a.createElement(t),c=a.getElementsByTagName(t)[0],
i.async=1,i.src=n,c.parentNode.insertBefore(i,c)
}(window,document,"script",ALGOLIA_INSIGHTS_SRC,"aa");