import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { Badge } from "./badge";

interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <Link href={`/product/${product.slug}`}>
            <div className="flex flex-col gap-4">
                <div className="relative bg-accent rounded-lg h-[170px] w-full min-w-[170px] flex items-center justify-center">
                    <Image
                        src={product.imageUrls[0]}
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="h-auto w-auto max-w-[80%] max-h-[80%]"
                        style={{ objectFit: "contain" }}
                        alt={product.name}
                    />

                    {product.discountPercentage > 0 && (
                        <Badge className="absolute left-2 top-2 px-2 py-[2px]">
                            <ArrowDownIcon size={12} />
                            {product.discountPercentage}%
                        </Badge>
                    )}
                </div>


                <div className="flex flex-col gap-2">
                    <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>

                    <div className="flex items-center gap-2">
                        {product.discountPercentage > 0 ? (
                            <>
                                <p className="font-semibold">R$ {product.totalPrice.toFixed(2).replace('.', ',')}</p>

                                <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2).replace('.', ',')}</p>
                            </>
                        ) : (
                            <p className="font-semibold text-sm">R$ {product.basePrice.toFixed(2)}</p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductItem;