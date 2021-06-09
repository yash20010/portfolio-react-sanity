import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'p1h0mx4n',
  dataset: 'production',
  apiVersion: '2021-06-08',
  useCdn: true,
})
