export default function page() {
    return (
        <>
            <div className="flex justify-center h-screen pt-28 lg:pt-40 px-10">
                <div>
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h1 className="text-4xl font-bold">Terima Kasih !</h1>
                        <p className="lg:px-52">Kerja sama dan dukungan Anda sangat berarti bagi kami. Kami berkomitmen untuk terus meningkatkan layanan kami berdasarkan masukan berharga seperti yang Anda berikan. Terima kasih atas waktu dan perhatiannya.</p>
                        <a
                            href="/hubungikami"
                            className="inline-flex items-center px-4 py-2 text-white bg-red-500 hover:bg-red-600 font-bold rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            <span className="text-sm font-medium">
                                Kembali
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
