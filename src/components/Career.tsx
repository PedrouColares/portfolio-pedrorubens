export default function Career({ title, description, date, image }: any) {
    return (
        <div className="flex flex-col w-full max-w-md mx-auto xl:p-0 pr-7 pl-7">
            <div className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-lg border flex flex-col gap-4 min-h-[180px] sm:min-h-[220px] min-w-0 sm:min-w-[280px]">
                <div className="flex flex-row gap-3 items-center">
                    <img className="w-8 h-8 sm:w-10 sm:h-10" src={image} alt="logo" />
                    <div>
                        <h2 className="text-base sm:text-lg font-bold text-gray-800 text-left leading-tight">{title}</h2>
                        <span className="text-xs sm:text-sm text-gray-500">{date}</span>
                    </div>
                </div>

                <span className="text-sm text-gray-500">{description}</span>
            </div>
        </div>
    )
}
