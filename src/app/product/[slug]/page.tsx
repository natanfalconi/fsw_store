import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";

interface ProductDetailsPageProps {
    params: {
        slug: string
    }
}
const ProductDetailsPage = async ({ params: { slug } }: ProductDetailsPageProps) => {

    const products = await prismaClient.product.findFirst({
        where: {
            slug
        }
    })

    if (!products) return null

    return (
        <div className="p-5 flex flex-col gap-8">
            <Badge
                className="gap-1 w-fit text-base uppercase border-primary px-3 border-2 py-[0.365rem]"
                variant='outline'
            >
                {/* {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                {category.name} */}
            </Badge>

            {/* <div className="flex flex-col gap-8">
                {category.products.map((product) => <ProductItem key={product.id} product={computeProductTotalPrice(product)} />)}
            </div> */}
        </div>
    );
}

export default ProductDetailsPage;