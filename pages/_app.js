import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp