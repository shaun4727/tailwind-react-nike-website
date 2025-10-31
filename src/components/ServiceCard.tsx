const ServiceCard = ({
    imgURL,
    label,
    subtext,
}: {
    imgURL: string;
    label: string;
    subtext: string;
}) => (
    <div className="shadow-3xl w-full flex-1 rounded-[20px] px-10 py-16 sm:w-[350px] sm:min-w-[350px]">
        <div className="bg-coral-red flex h-11 w-11 items-center justify-center rounded-full">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="font-palanquin mt-5 text-3xl leading-normal font-bold">
            {label}
        </h3>
        <p className="font-montserrat text-slate-gray wrap-break-words mt-3 text-lg leading-normal">
            {subtext}
        </p>
    </div>
);

export default ServiceCard;
