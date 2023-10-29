import "../assets/styles/main.sass";

export default function App({ Component, pageProps }: any) {
    return (
        <>
            <div className="wrap">
                <Component {...pageProps} />
            </div>
        </>
    )
}