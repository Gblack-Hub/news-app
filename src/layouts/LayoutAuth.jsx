
export default function LayoutAuth({children}) {
    return (
        <main className="container-fluid authentication_page">
            <div className="row h-100">
                <div className="col-sm-12 col-md-6 col-xl-4 offset-md-3 offset-xl-4 my-auto">
                    <div className="auth_card">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}