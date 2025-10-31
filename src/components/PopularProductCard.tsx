import { star } from "../assets/icons";

const PopularProductCard = ({
    imgURL,
    name,
    price,
}: {
    imgURL: string;
    name: string;
    price: string;
}) => (
    <div className="flex w-full flex-1 flex-col max-sm:w-full">
        <img src={imgURL} alt={name} className="h-[282px] w-[282px]" />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating icon" width={24} height={24} />
            <p className="font-montserrat text-slate-gray text-xl leading-normal">
                (4.5)
            </p>
        </div>
        <h3 className="font-palanquin mt-2 text-2xl leading-normal font-semibold">
            {name}
        </h3>
        <p className="font-montserrat text-coral-red mt-2 text-2xl leading-normal font-semibold">
            {price}
        </p>
    </div>
);

export default PopularProductCard;
