export default {
  logo: <span style={{ fontWeight: "bold" }}>Linux.sh</span>,
  Layout: "default",
  project: {
    link: 'https://github.com/ch-shubham/Linux.sh'
  },
  docsRepositoryBase: "https://github.com/ch-shubham/Linux.sh",
  footer: {
    content: "Linux.sh is a project by Shubham Chaudhary",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Linux.sh" key={"title"} />
      <meta
        property="og:description"
        content="Learn Linux commands in a fun way"
        key={"description"}
      />
    </>
  ),
  banner:{
    dismissible: false,
    content: "This is under development. This will be made open source soon. Stay tuned! 🚀",
  }
}