import React from 'react'
import { Toaster } from 'react-hot-toast'

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div>

                <Toaster
                    toastOptions={{
                        style: {
                            background: '#080e20',
                            padding: '0px',
                            margin: '0px',
                            border:  '1px solid #0d3280',
                        },
                    }}
                />
                {children}
            </div>
        </>
    )
}

export default Rootlayout
