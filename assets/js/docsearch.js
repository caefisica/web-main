var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

algoliasearchNetlify({
  appId: 'B36UGT1YWJ',
  apiKey: '8c770925ae0a24146f978f0495f51ec1',
  siteId: 'abc167f5-8dee-48db-a7da-3c97c18849be',
  branch: 'master',
  selector: '#docsearch',
});