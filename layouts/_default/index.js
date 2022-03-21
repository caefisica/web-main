var pregrado = [
{{ range $index, $page := (where .Site.Pages "Section" "pregrado") -}}
  {
    id: {{ $index }},
    title: "{{ .Title }}",
    description: "{{ .Params.description }}",
    href: "{{ .URL | relURL }}"
  },
{{ end -}}
];