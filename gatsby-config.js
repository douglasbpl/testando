module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Projeto Blog",
  },
  plugins: ["gatsby-plugin-styled-components",
  `gatsby-plugin-react-helmet`,
  'gatsby-plugin-netlify',
    {
      resolve: "gatsby-source-graphql",
      options: {
                typeName: "alldata",
                fieldName: "alldata",
                url: "https://api-us-east-1.graphcms.com/v2/ckwgt0db90jga01xo4hkvaz6s/master",
      },
    },
  ]
  }
