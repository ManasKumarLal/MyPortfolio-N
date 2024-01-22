import React, { useEffect, useState } from 'react'

const AppDownload = () => {

    // Initialize deferredPrompt for use later to show browser install prompt.
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const catchInstallPrompt = () => {
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);
        });
    }

    const handleInstallPrompt = async () => {
        try {
            const status = await deferredPrompt.prompt()
            if (status.outcome === "accepted") {
                setDeferredPrompt(null);
            }
        } catch (error) {
            console.log("Already installed", error)
        }
    }

    useEffect(() => {
        catchInstallPrompt();
    }, [])

    return (
        <>
            {
                deferredPrompt && (
                    <a
                        onClick={handleInstallPrompt}
                        className="cursor-pointer"
                        download="Portfolio-MKL"
                    >
                        <img
                            className='installForWindows w-14'
                            src="https://upload.wikimedia.org/wikipedia/en/0/08/Microsoft_Store_app_icon.png"
                            alt="window logo"
                        />
                        <img
                            className='installForAndroid w-10'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Play_Store_%282012-2014%29.svg/1000px-Google_Play_Store_%282012-2014%29.svg.png"
                            alt="window logo"
                        />
                    </a>
                )
            }
        </>
    )
}

export default AppDownload
