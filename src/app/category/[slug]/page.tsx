import { CATEGORY_ICON } from "@/app/contants/category-icon";
import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {

    const category = await prismaClient.category.findFirst({
        where: {
            slug: params.slug
        },
        include: {
            products: true
        }
    })

    const products = await prismaClient.product.findMany({
        where: {
            category: {
                slug: params.slug
            }
        }
    })

    if (!category) {
        return null
    }


    return (
        <div className="p-5 flex flex-col gap-8">
            <Badge
                className="gap-1 w-fit text-base uppercase border-primary px-3 border-2 py-[0.365rem]"
                variant='outline'
            >
                {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                {category.name}
            </Badge>

            <div className="flex flex-col gap-8">
                {category.products.map((product) => <ProductItem key={product.id} product={computeProductTotalPrice(product)} />)}
            </div>
        </div>
    );
}

export default CategoryProducts;