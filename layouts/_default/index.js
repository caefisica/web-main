var unmsm = [
  {{ range $index, $page := (where .Site.Pages "Section" "unmsm") -}}
    {
      id: {{ $index }},
      title: "{{ .Title }}",
      description: "{{ .Params.description }}",
      href: "{{ .URL | relURL }}"
    },
  {{ end -}}
  ];