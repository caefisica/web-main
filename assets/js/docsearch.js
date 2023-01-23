var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

/*eslint-disable */
algoliasearchNetlify({
  appId: 'OFKEMFNRGM',
  apiKey: '7aeadd350c28f8dc7d97bb001bc2dd3b',
  siteId: 'abc167f5-8dee-48db-a7da-3c97c18849be',
  branch: 'master',
  selector: '#docsearch',
});
/*eslint-enable */