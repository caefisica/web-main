import Plausible from 'plausible-tracker'

const { trackPageview } = Plausible({
  domain: 'caefis.netlify.app',
})

trackPageview()
