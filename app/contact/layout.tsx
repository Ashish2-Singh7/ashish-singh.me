import React from 'react'
import { Toaster } from 'react-hot-toast'

const Contactlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div>

                <Toaster
                    toastOptions={{
                        style: {
                            background: '#080e20',
                            border:  '1px solid #0d3280',
                            color: 'white'
                        },
                    }}
                />
                {children}
            </div>
        </>
    )
}

export default Contactlayout;
